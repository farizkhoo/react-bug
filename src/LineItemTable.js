import React, { Component }  from 'react';

const descriptionPlaceholder = type => {
  if (type === "item") {
    return 'Item Description'
  } else if (type === "discount") {
    return 'Discount Description'
  }
}

const LineItemTable = ({items, updateItem, removeItem, taxMode}) => {
  return(
    <div>
      {
        items.map((item, index) => (
          <div className='form-row' id={ `item-${index}`  } key={ `item-${index}` }>
            <div className='col-md-2'>
              <input
                type='text'
                placeholder='Quantity'
                className='form-control'
                value={ item.quantity }
                onChange={ (e) => {
                  updateItem(index, 'quantity', e.target.value)
                } }
                style={ item.type != "item" ? {display: 'none'} : null}
              />
            </div>
            {
              taxMode === "perLineItem" ?
                (
                  item.type === "item" ? (
                    <div className='col-md-2'>
                      <select
                        value={item.tax_type ? item.tax_type : ''}
                        className='form-control'
                        onChange={e => {
                          updateItem(index, 'tax_type', e.target.value)
                        }}
                      >
                        <option value='gst'>GST</option>
                        <option value='sst'>SST</option>
                        <option value='service_tax'>Service Tax</option>
                      </select>
                    </div>

                  ) : <div className='col-md-2'/>
                ) : null
            }
            <div className={ taxMode === "perLineItem" ? 'col-md-5' : 'col-md-7'  }>
              <input
                type='text'
                className='form-control'
                placeholder={ descriptionPlaceholder(item.type) }
                value={item.description}
                onChange={ (e) => {
                  updateItem(index, 'description', e.target.value)
                } }
                disabled={ item.type === "serviceCharge" }
              />
            </div>
            <div className='col-md-2'>
              <input
                type='text'
                placeholder='0.00'
                className='form-control'
                style={ item.type === "discount" ? {color: 'red'} : {color: 'blue'} }
                onChange={ (e) => {
                  updateItem(index, 'amount', e.target.value)
                } }
              />
            </div>
            <div className='col-md-1'>
              <button
                onClick={e => {
                  e.preventDefault()
                  removeItem(index)
                } }
                className="btn btn-danger">
                X
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default LineItemTable;