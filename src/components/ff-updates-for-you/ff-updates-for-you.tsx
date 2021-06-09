import { Component, h, Prop, Event, EventEmitter } from '@stencil/core'
import { Benchmark } from '../../types'

@Component({
  tag: 'ff-updates-for-you',
  styleUrl: 'ff-updates-for-you.scss',
  shadow: true
})
export class FFUpdatesForYou {
  @Prop() benchmarks: Benchmark[] = []

  private getBenchMarkMetadata (score: number) {
    switch (true) {
      case score <= 0: {
        return { color: 'gray-500', statusText: 'N/A' }
      }
  
      case score > 0 && score <= 2: {
        return { color: 'red', statusText: 'Far below standards' }
      }
  
      case score > 2 && score <= 4: {
        return { color: 'orange', statusText: 'Below standards' }
      }
  
      case score > 4 && score <= 6: {
        return { color: 'yellow', statusText: 'Meets standards' }
      }
  
      case score > 6 && score <= 8: {
        return { color: 'blue', statusText: 'Exceeds standards' }
      }
  
      case score > 8: {
        return { color: 'green', statusText: 'Excellent' }
      }
  
      default: {
        return { color: 'gray-500', statusText: 'N/A' }
      }
    }
  }

  @Event({ eventName: 'detailBtnClick' }) detailBtnClick: EventEmitter

  render () {
    return (
      <div class="container">
        <h1 class="title">Updates for you</h1>

        <p class="pharagraph">
          Your FundFluent Index helps you find business loans that match your credit profile. Here are the main contributors to your index score.
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
          To receive updates and insights, please provide more information, the better we know you the more updates we have for you.
        </p>

        <div class="text-right mt-2">
          <ff-button
            type="primary"
            size="mini"
            onClick={() => this.detailBtnClick.emit()}
          >
            See details
          </ff-button>
        </div>
      </div>
    )
  }
}