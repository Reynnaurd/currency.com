import './HeaderLang.css'

export default function HeaderLang() {
  return (
      <div className="headerLangContainer">
          <a href="#">
            <div id="headerLangButton" className="headerLangButton">
                <img className="countryFlag" src="https://freesvg.org/img/tobias-Flag-of-the-United-Kingdom.png"></img>
                <div className='countryName'>EN</div>
                <img src='./home/unknown/Pictures/Screenshot from 2022-12-02 22-04-42.png' />
            </div>
          </a>
        <div class="dropdown">
          <div id="dropdown" class="dropdown-content">
            <a href="#">
              <img className="countryFlag" src="https://freesvg.org/img/tobias-Flag-of-the-United-Kingdom.png"></img>
              <div className='countryName'>DE</div>
              <img src='./home/unknown/Pictures/Screenshot from 2022-12-02 22-04-42.png' />
            </a>
            <a href="#">
              <img className="countryFlag" src="https://freesvg.org/img/tobias-Flag-of-the-United-Kingdom.png"></img>
              <div className='countryName'>DE</div>
              <img src='./home/unknown/Pictures/Screenshot from 2022-12-02 22-04-42.png' />
            </a>
            <a href="#">
              <img className="countryFlag" src="https://freesvg.org/img/tobias-Flag-of-the-United-Kingdom.png"></img>
              <div className='countryName'>DE</div>
              <img src='./home/unknown/Pictures/Screenshot from 2022-12-02 22-04-42.png' />
            </a>
          </div>
        </div> 
      </div>
  )
}

var headerButton = document.getElementById('headerLangButton').addEventListener('click', ()=>{
  if(document.getElementById('dropdown').style.display == "block") {
    document.getElementById('dropdown').style.display = "none";
  }
  else {
    document.getElementById('dropdown').style.display = "block";
  }
} );
