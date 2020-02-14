import React from 'react';

function NewBeerForm() {
  const submitBtnStyle = {
    marginTop: '20px',
    height: '50px',
  }
  return(
    <div>
      <form action="index.html" method="post">

        <div>
          <label for="name">Name</label>
        </div>
        <div>
          <input name="name" placeholder="ex. Natty Lite"/>
        </div>
        <div/>

        <div>
          <label for="brand">Brand</label>
        </div>
        <div>
          <input name="brand" placeholder="ex. Pond Scum Brewery"/>
        </div>
        <div/>

        <div>
          <label for="price">Price</label>
        </div>
        <div>
          <input name="price" placeholder="ex. $4.00"/>
        </div>
        <div/>

        <div>
          <label for="alcoholContent">Alcohol Content</label>
        </div>
        <div>
          <input name="alcoholContent" placeholder="ex. 7%"/>
        </div>
        <div/>

        <div>
          <label for="type">Type</label>
        </div>
        <div>
          <input name="type" placeholder="ex. IPA"/>
        </div>
        <div/>

        <div>
          <label for="promoText">Promotional Text</label>
        </div>
        <div>
          <textarea name="promoText" placeholder="Promotional text here"/>
        </div>
        <div/>

        <button style={submitBtnStyle} type="submit">Submit</button>

      </form>
    </div>

  )
}

export default NewBeerForm;
