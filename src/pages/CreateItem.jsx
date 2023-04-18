import React from 'react'
import Header from '../components/Header/Header'
// import { createProduct } from '../api/items'

function CreateProduct() {
  return (
    <div>
<Header />
      <form>
  <label>
    Title:
    <input type="text" name="Title" />
  </label>
  <label>
    Description:
    <input type="text" name="Description" />
  </label>
  <label>
    Location:
    <input type="text" name="Location" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
  )
}

export default CreateProduct