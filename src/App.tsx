import styles from './App.module.scss';

const App = () => {
  const string = 'Hello';
  return (
    <div>
      <div className={styles.app}>
        <div className="stringprimary">{string}</div>
        <div className="stringgreen">{string}</div>
      </div>
    </div>
  );
};

export default App;
