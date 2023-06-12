import './introduce.css'

const Introduce = () => {
   const handleInput = () => {
     console.log('input 태그 동작');
   }

   const handleButton = (event) => {
    event.preventDefault();
    console.log('button 태그 동작');
  }

    return <>
        <div className='introduceContainer'>
            <div className='introduceBox'>
                <img className='introduceImg' src='/images/jini.jpg' alt='jini' />
                <span className='introduceName'>최진이</span>
                <span className='introduceNum'>47기</span>
                <form>
                    <input className='introduceInput' type='text' placeholder='내용입력' onChange={handleInput}/>
                    <button className='introduceBtn' type='sumbit' onClick={handleButton}>클릭</button>
                </form>
            </div>
        </div>
        
    </>;    
};

export default Introduce;