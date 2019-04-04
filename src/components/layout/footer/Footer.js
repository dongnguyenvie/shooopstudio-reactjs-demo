import React from 'react';

const Footer = () => {
  const testLorem = [
    {
      title: 'EDITOR’S PICKS',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec.'
    },
    {
      title: 'FREE WORLDWIDE DELIVERY',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec.'
    },
    {
      title: 'SHOOP’S OWN LABEL',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit donec.'
    }
  ]
  return (
    <div className="w-100 wrap-two py-5" style={{
      backgroundImage: 'url("https://shooopstudio.com/wp-content/uploads/2015/12/Background-text-with-icon.jpg?id=1279")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto'
    }}>
      <div className="container">
        <div className="row">
          {testLorem.map((item, index) =>(
            <div className="col-md-4 col-6" key={index}>
              <h5 className="wrap-two__title"><strong >{item.title}</strong></h5>
              <p >{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;