// const getComponentClosestLanguage = (el: HTMLElement) => {
//   let closestElement = el.closest('[lang]') as HTMLElement
//   return closestElement?.lang || 'en'
// }

const fetchLocaleStringsForComponent = async (componentName: string, locale: string) => {
  const res = await fetch(`/locales/${componentName}.${locale}.json`)
  if (res.ok) {
    return res.json()
  } else {
    throw new Error()
  }
}

const getLocaleComponentStrings = async (el: HTMLElement, lang: string) => {
  const componentName = el.tagName.toLowerCase()
  let strings

  try {
    strings = await fetchLocaleStringsForComponent(componentName, lang)
  } catch (e) {
    console.warn(`no locale for ${componentName} (${lang}) loading default locale en.`)
    strings = await fetchLocaleStringsForComponent(componentName, 'en')
  }

  return strings
}

export default getLocaleComponentStrings
