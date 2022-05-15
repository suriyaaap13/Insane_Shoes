import React,{useState} from 'react'
import Filter from './Filter';
import Product from './Product';
import Design from './Design';
import CartItem from './CartItem';

export default function Store() {
  const [ tab, setTab ] = useState(true);
  const [items, setItem] = useState([]);
  function addItem(value){
    setItem((prevValue)=>{
      return [...prevValue, value];
    });
  }
  function deleteItem(id){
    setItem((prevValue)=>{
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function ChangeTab(){
    setTab(!tab);
  }
  return (
    <>
        <div className='row px-4 mw-100' >
          {/* Filter Section / Design Section */}
          {(tab===true)?<Filter/>:<Design tab={ChangeTab} onAdd={addItem} />}
          {/* Product Section */}
          {(tab===true)&&<Product tab={ChangeTab}/>}
          {/* Cart Section */}
          <div className='col-md-2 shadow p-3 mb-3 bg-white rounded px-4'>
            <div className=' '>
              {/* Cart and Cart Icon */}
              <div className='d-flex justify-content-between align-items-center'>
                <div className='fs-3'>
                  Cart
                </div>
                {/* Cart Logo */}
                <div>
                  <i className="fa-solid fa-cart-shopping fa-2x"></i>
                </div>
              </div>
              {/* Inside cart if items is there */}
              {(items.length!==0)&&
                items.map((item, index)=>{
                  return (
                    <CartItem
                      onChecked={deleteItem}
                      key={index}
                      id={index}
                      fb={item.fb}
                      size={item.size}
                      back={item.back}
                    />
                  )
                })
              }
              {/* show order button if there is something in the cart */}
              {(items.length!==0)&&
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='btn btn-primary'>
                    Checkout
                  </div>
                </div>
              }
              {/* If nothing is there */}
              {(items.length===0)&&
                <div className='w-100 py-5 my-5'>
                  <div className='d-flex align-items-center justify-content-center my-5 py-5'>
                    What's stopping you?
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
    </>
  );
  
}
