import logo from './logo.svg';
import './App.css';
import reactifyWc from "reactify-wc"

const FFButton = reactifyWc('ff-button')
const FFUpdatesForYou = reactifyWc('ff-updates-for-you')

function App() {
  const seeDetail = () => {
    console.log('see detail')
  }

  return (
    <div>
      <FFButton type="primary" onClick={() => log()}>test</FFButton>

      <hr />

      <div style={{ width: '300px', border: '1px grey dashed' }}>
        <FFUpdatesForYou
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
          onSeeDetail={() => seeDetail()}
        />
      </div>
    </div>
  );
}

export default App;
