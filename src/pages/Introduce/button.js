export const App2= ()=> {
    const handleButton= ()=> {
      console.log("button 태그 동작");
    }
    return (
      <div className="button">
      <input type="text" onChange={handleButton} />
      </div>
        
    );
  }