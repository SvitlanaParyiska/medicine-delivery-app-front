import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartsHistory } from '../../redux/shopsSelectors';

function HistoryPage() {
  const historyArray = useSelector(selectCartsHistory);

  return (
    <main>
      <div className="container">
        <h1 style={{ fontSize: '26px' }}>Your history of carts:</h1>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {historyArray.length > 0 ? (
            historyArray.map(item => (
              <li
                drug={item}
                key={nanoid()}
                style={{
                  borderRadius: '8px',
                  border: '1px solid #262f34',
                  padding: '10px',
                  marginTop: '20px',
                }}
              >
                <p>DrugsList: </p>
                <ul>
                  {item.drugsList.map((drug, index) => (
                    <li key={nanoid()}>
                      <p
                        style={{
                          display: 'inline-block',
                        }}
                      >
                        {index + 1}.
                      </p>
                      <p
                        style={{
                          display: 'inline-block',
                        }}
                      >
                        name: {drug.drugName}
                      </p>
                      <p>price: {drug.price}</p>
                      <p>total: {drug.total}</p>
                    </li>
                  ))}
                </ul>
                <p>Total Price: {item.totalPrice}</p>
                <p>Date: {item.createdAt.slice(0, 10)}</p>
              </li>
            ))
          ) : (
            <>
              <p>Your history is still empty...</p>
              <Link to="/">Back to shopping</Link>
            </>
          )}
        </ul>
      </div>
    </main>
  );
}

export default HistoryPage;
