import React, { Component } from 'react';

const blankItem = {
  description: "",
  quantity: "",
  amount: "",
  type: "item",
  errors: {},
  tax_type: null,
}

const blankServiceCharge = {
  description: "Service Charge",
  quantity: "",
  amount: "",
  type: "serviceCharge",
  errors: {},
  tax_type: null,
}

const blankDiscount = {
  description: "",
  quantity: "",
  amount: "",
  type: "discount",
  errors: {},
  tax_type: null,
}

const AddItemButtons = ({addItem, serviceChargePresent}) => (
  <div id='add-item-buttons'>
    <button
      className='btn btn-info col-md-4'
      onClick={() => {addItem(blankItem)}}
    >
      Add New Item
    </button>
    <button
      className='btn btn-primary col-md-4'
      onClick={() => {addItem(blankDiscount)}}
    >
      Add Discount
    </button>
    <button
      className='btn btn-warning col-md-4'
      onClick={() => {addItem(blankServiceCharge)}}
      disabled={serviceChargePresent}
    >
      Add Service Charge
    </button>
  </div>
)

export default AddItemButtons;
