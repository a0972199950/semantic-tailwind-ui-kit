import { Component, h, Prop, State, Event, EventEmitter, Element, Watch } from '@stencil/core'
import get from 'lodash/get'
import { Benchmark } from '../../types'
import getLocaleComponentStrings from '../../utils/locale'

@Component({
  tag: 'jh-updates-for-you',
  styleUrl: 'jh-updates-for-you.scss',
  shadow: true
})
export class JHUpdatesForYou {
  @Prop() benchmarks: Benchmark[] = []
  @Prop() locale: string

  @State() key: string = new Date().valueOf().toString()

  private strings: any
  private ready: boolean = false

  @Element() element: any

  @Event({ eventName: 'detailBtnClick' }) detailBtnClick: EventEmitter

  @Watch('locale')
  async handleLocaleChange(newLocale: string) {
    if (!this.ready) { return }
    await this.initLocaleStrings(newLocale)
    this.updateKey()
  }

  async componentWillLoad () {
    this.detectLang()
    await this.initLocaleStrings()
    this.ready = true
  }

  detectLang () {
    const closestElement = this.element.closest('[lang]') as HTMLElement
    this.locale = this.locale || closestElement?.lang || 'en'
  }

  async initLocaleStrings (lang?: string) {
    const locale = lang || this.locale
    this.strings = await getLocaleComponentStrings(this.element, locale)
  }

  t (key: string) {
    return get(this.strings, key)
  }

  updateKey () {
    this.key = new Date().valueOf().toString()
  }

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

  render () {
    return (
      <div class="container" key={this.key}>
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
          <jh-button
            type="primary"
            size="mini"
            onClick={() => this.detailBtnClick.emit()}
          >
            {this.t('seeDetailsBtnText')}
          </jh-button>
        </div>
      </div>
    )
  }
}