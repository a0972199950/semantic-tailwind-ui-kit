import { Component, h, Prop, Event, EventEmitter, Element, Watch } from '@stencil/core'
import get from 'lodash/get'
import { Benchmark } from '../../types'
import getLocaleComponentStrings from '../../utils/locale'

@Component({
  tag: 'ff-updates-for-you',
  styleUrl: 'ff-updates-for-you.scss',
  shadow: true
})
export class FFUpdatesForYou {
  @Prop() benchmarks: Benchmark[] = []
  @Prop() lang: string

  @Element() element: HTMLElement

  @Event({ eventName: 'detailBtnClick' }) detailBtnClick: EventEmitter

  @Watch('lang')
  handleLangChange(newLang: string) {
    console.log('handleLangChange', newLang)
    this.initLocaleStrings(newLang)
  }

  private strings: any

  private getBenchMarkMetadata (score: number) {
    switch (true) {
      case score <= 0: {
        return { color: 'gray-500', statusText: 'N/A' }
      }
  
      case score > 0 && score <= 2: {
        return { color: 'red', statusText: this.t('index.farBelowStandards') }
      }
  
      case score > 2 && score <= 4: {
        return { color: 'orange', statusText: this.t('index.belowStandards') }
      }
  
      case score > 4 && score <= 6: {
        return { color: 'yellow', statusText: this.t('index.meetsStandards') }
      }
  
      case score > 6 && score <= 8: {
        return { color: 'blue', statusText: this.t('index.exceedsStandards') }
      }
  
      case score > 8: {
        return { color: 'green', statusText: this.t('index.excellent') }
      }
  
      default: {
        return { color: 'gray-500', statusText: 'N/A' }
      }
    }
  }

  async componentWillLoad () {
    this.detectLang()
    this.initLocaleStrings()
  }

  detectLang () {
    console.log('detectLang')
    const closestElement = this.element.closest('[lang]') as HTMLElement
    console.log('lang: ', this.lang || closestElement?.lang || 'en')
    this.lang = this.lang || closestElement?.lang || 'en'
  }

  async initLocaleStrings (lang?: string) {
    console.log('initLocaleStrings')
    this.strings = await getLocaleComponentStrings(this.element, lang || this.lang)
  }

  t (key: string) {
    return get(this.strings, key)
  }

  render () {
    return (
      <div class="container">
        <h1 class="title">{this.t('title')}</h1>

        <p class="pharagraph">
          {this.t('indexDesc')}
        </p>

        {
          this.benchmarks.map(benchmark => (
            <div class="benchmark">
              <div class="benchmark__content">
                <h3 class="benchmark__key">{benchmark.text}</h3>
                <span class="whitespace-nowrap">
                  <span class="benchmark__status">{this.getBenchMarkMetadata(benchmark.score).statusText}</span>
                  <span class={`benchmark__icon bg-${this.getBenchMarkMetadata(benchmark.score).color}`} />
                </span>
              </div>
            </div>
          ))
        }

        <p class="pharagraph">
          {this.t('updatesDesc')}
        </p>

        <div class="text-right mt-2">
          <ff-button
            type="primary"
            size="mini"
            onClick={() => this.detailBtnClick.emit()}
          >
            {this.t('seeDetailsBtnText')}
          </ff-button>
        </div>
      </div>
    )
  }
}