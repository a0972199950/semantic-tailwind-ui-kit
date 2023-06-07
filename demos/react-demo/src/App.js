import './App.css';
import reactifyWc from 'reactify-wc'
import { useState } from 'react'

const JHButton = reactifyWc('jh-button')
const JHUpdatesForYou = reactifyWc('jh-updates-for-you')

function App() {
  const [locale, setLocale] = useState('en')

  const seeDetail = () => {
    alert('Click see detail')
  }

  return (
    <div>
      <JHButton type="primary">button</JHButton>

      <hr />

      <div style={{ width: '300px', border: '1px grey dashed' }}>
        <JHUpdatesForYou
          locale={locale}
          benchmarks={[
            {
              key: 'INDUSTRY_BENCHMARK_INDEX',
              text: 'Industry benchmark index',
              score: 4
            },
    
            {
              key: 'FININCIAL_HEALTHINESS',
              text: 'Financial healthiness',
              score: 0
            },
    
            {
              key: 'DATA_QUALITY',
              text: 'Data Quality',
              score: 10
            },
          ]}
          onDetailBtnClick={() => seeDetail()}
        />
      </div>

      <button onClick={() => setLocale('en')}>Change locale to en</button>
      <button onClick={() => setLocale('zh-TW')}>Change locale to zh-TW</button>
    </div>
  );
}

export default App;
