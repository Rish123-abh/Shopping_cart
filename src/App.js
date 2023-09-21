import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
function App() {
  /*Redux-> isme bhi centralised data hoga(store) jaise context API me create karte hai 
Isme data slices ki form me hoga and jo function banye jayyenge slicer ke andar usko reducer bolte hai 
Slices-> portion of data
To develop slice-> slice name,initial state,functionality(reducer) yeh teen cheez deni hogi slice developp karne ke liye
for example->restaurant ke liye [user,orders,list of restaurents] yeh sub slices hai jisme specific data dala hoga 
user me user related data hai orders me orders ki details hai */

// Kuch bhi application banayenge do kaam must hai
// 1.Slices create karna
// 2.Store create karna


// REdux and react ko link karne ke liye Provider ke andar app ko wrap karenge 
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
