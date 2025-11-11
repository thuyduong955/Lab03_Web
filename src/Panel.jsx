function Panel({ title, isActive, onShow, children }) {
  return (
    <div className="panel" style = {{color: 'black'}}>
      <h4>{title}</h4>
      {isActive ? (
        <div className="panel-content" style={{ color: 'black' }}>
          {children}
        </div>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </div>
  );
}

export default Panel;
