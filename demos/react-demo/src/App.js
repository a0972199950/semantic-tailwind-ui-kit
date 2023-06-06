import './App.css';
import reactifyWc from 'reactify-wc'

const JHButton = reactifyWc('jh-button')
const JHUpdatesForYou = reactifyWc('jh-updates-for-you')

function App() {
  const seeDetail = () => {
    alert('Click see detail')
  }

  return (
    <div>
      <p className="benchmark__key">benchmark__key</p>

      <hr />

      <JHButton type="primary">button</JHButton>

      <hr />

      <div style={{ width: '300px', border: '1px grey dashed' }}>
        <JHUpdatesForYou
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
    </div>
  );
}

export default App;
