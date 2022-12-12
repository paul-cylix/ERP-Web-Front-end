<template>
    <div class="col-md-12 mt-3">
      <!-- Form Element sizes -->
      <div class="card card-secondary">
        <div
          class="overlay"
          style="background-color: white !important"
          v-show="isLoading"
        >
          <loading-spinner></loading-spinner>
        </div>
  
        <div class="card-header">
          <h3 class="card-title">Vendor Details</h3>
        </div>
        <div class="card-body">
          <!-- Buttons -->
          <div class="row d-flex justify-content-end align-items-center flex-nowrap m-1">
            <div>
              <button
                v-show="counter"
                type="button"
                @click="counter--"
                class="btn btn-secondary btn-sm"
              >
                Previous
              </button>
          
              <button
                v-if="(this.counter <= 8)"
                type="button"
                @click="next()"
                class="btn ml-1 btn-primary btn-sm"
              >
                Next
              </button>
          
              <button
                v-else
                type="button"
                class="btn ml-1 btn-success btn-sm"
                @click="submit()"
              >
                Submit
              </button>
            </div>
          </div>
          <!-- / Buttons -->

          <!-- Step Numbers -->
          <div class="d-flex progressBarWrapper text-center mt-5">
            <div class="progressbar" :class="classA">
              <span :class="classA">1</span>
            </div>
            <div class="progressbar" :class="classB">
              <span :class="classB">2</span>
            </div>
            <div class="progressbar" :class="classC">
              <span :class="classC">3</span>
            </div>
            <div class="progressbar" :class="classD">
              <span :class="classD">4</span>
            </div>
            <div class="progressbar" :class="classE">
              <span :class="classE">5</span>
            </div>
            <div class="progressbar" :class="classF">
              <span :class="classF">6</span>
            </div>
            <div class="progressbar" :class="classG">
              <span :class="classG">7</span>
            </div>
            <div class="progressbar" :class="classH">
              <span :class="classH">8</span>
            </div>
            <div class="progressbar" :class="classI">
              <span :class="classI">9</span>
            </div>
            <div class="progressbar" :class="classZ">
              <span :class="classZ">10</span>
            </div>
          </div>
  
          <div class="d-flex text-center">
            <div class="textbar" :class="classA">
              <small
                ><span :class="classA" class="font-weight-bold"
                  >General</span
                ></small
              >
            </div>
            <div class="textbar" :class="classB">
              <small
                ><span :class="classB" class="font-weight-bold"
                  >Business</span
                ></small
              >
            </div>
            <div class="textbar" :class="classC">
              <small
                ><span :class="classC" class="font-weight-bold"
                  >Contact and Address</span
                ></small
              >
            </div>
            <div class="textbar" :class="classD">
              <small
                ><span :class="classD" class="font-weight-bold"
                  >Purchasing</span
                ></small
              >
            </div>
            <div class="textbar" :class="classE">
              <small
                ><span :class="classE" class="font-weight-bold"
                  >Accounting</span
                ></small
              >
            </div>
            <div class="textbar" :class="classF">
              <small
                ><span :class="classF" class="font-weight-bold"
                  >Technical and Support</span
                ></small
              >
            </div>
            <div class="textbar" :class="classG">
              <small
                ><span :class="classG" class="font-weight-bold"
                  >Related To</span
                ></small
              >
            </div>
            <div class="textbar" :class="classH">
              <small
                ><span :class="classH" class="font-weight-bold"
                  >Attachments</span
                ></small
              >
            </div>
            <div class="textbar" :class="classI">
              <small
                ><span :class="classI" class="font-weight-bold"
                  >Distribution and Agreement</span
                ></small
              >
            </div>
            <div class="textbar" :class="classZ">
              <small
                ><span :class="classZ" class="font-weight-bold"
                  >Review</span
                ></small
              >
            </div>
          </div>
          <!-- / Step Numbers -->
  
          <!-- Main Form -->
  
          <!-- General -->
          <div v-if="this.counter === 0">
            <div class="row mt-4">
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Website</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="general.website"
                  />
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >Vendor Type</label
                    ></small
                  >
                  <model-list-select
                    :list="vendorList"
                    v-model="vendorSelected"
                    option-value="code"
                    option-text="name"
                    placeholder="select item"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">In Business Since</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="general.inBusinessSince"
                  />
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >Payment Terms</label
                    ></small
                  >
                  <model-list-select
                    :list="paymentTermsList"
                    v-model="paymentTermsSelected"
                    option-value="code"
                    option-text="name"
                    placeholder="select item"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Credit Limit</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="general.creditLimit"
                  />
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >Currency</label
                    ></small
                  >
                  <model-list-select
                    :list="currenciesList"
                    v-model="currenciesSelected"
                    option-value="code"
                    option-text="name"
                    placeholder="select item"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>
  
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="requestDate">Last Update Date</label></small>
                  <date-picker
                    disabled
                    valueType="format"
                    style="display: block; width: 100%; line-height: 20px"
                    v-model="requestDate"
                  ></date-picker>
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Last Update By</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    readonly
                    v-model="general.lastUpdateBy"
                  />
                </div>
              </div>
            </div>

            <div class="row"> 
              <div class="col-md-3">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >VAT Status</label
                    ></small
                  >
                  <model-list-select
                    :list="businessTaxStatusList"
                    v-model="businessTaxStatusSelected"
                    option-value="code"
                    option-text="name"
                    placeholder="select item"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">TIN Number</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="general.tinNumber"
                  />
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">2303#</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="general.twentyThreeZeroThree"
                  />
                </div>
              </div>

              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Sec#</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="general.secNumber"
                  />
                </div>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <small><label for="purpose">Notes</label></small>
                  <textarea
                    class="form-control"
                    v-model.trim="general.notes"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <!-- / General -->
  
          <!-- Business -->
          <div class="mt-4" v-else-if="this.counter === 1">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >Type of Business</label
                    ></small
                  >
                  <model-list-select
                    :list="businessTypeList"
                    v-model="businessTypeSelected"
                    option-value="code"
                    option-text="name"
                    placeholder="select item"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >Nature of Business</label
                    ></small
                  >
                  <model-list-select
                    :list="businessNatureList"
                    v-model="businessNatureSelected"
                    option-value="code"
                    option-text="name"
                    placeholder="select item"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <small><label for="reference">Authorized Capital Stock</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="business.authorizedCapitalStock"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <small><label for="reference">Paid-Up Capital Stock</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="business.paidUpCapitalStock"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <small><label for="purpose">Description of Line of Business</label></small>
                  <textarea
                    class="form-control"
                    v-model.trim="business.notes"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <table class="table table-sm table-bordered table-striped mx-2">
                <thead>
                  <tr>
                    <th colspan="6" scope="col">
                      <aside class="d-flex align-items-center">
                        <span class="mb-1 ml-1"> Corporate Officers</span>
                      </aside>
                    </th>
                    <th>
                      <aside class="text-center">
                        <button
                          class="btn btn-sm btn-success m-0"
                          data-toggle="modal"
                          data-target="#modal-corporate-officer"
                          @click="setButton()"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </aside>
                    </th>
                  </tr>
                  <tr>
                    <th scope="col" class="text-center">#</th>
                    <th scope="col">Prefix</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Sufix</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
    
                <tbody style="font-size: 14px">
                  <tr v-for="(item, index) in businessData" :key="item.id">
                    <td class="text-center">{{ index + 1 }}.</td>
                    <td>{{ item.prefix }}</td>
                    <td>{{ item.firstName }}</td>
                    <td>{{ item.lastName }}</td>
                    <td>{{ item.suffix }}</td>
                    <td>{{ item.designation }}</td>
                    <td class="pl-0 m-0">
                      <aside class="d-flex justify-content-center">
                        <button
                          class="btn btn-sm btn-info m-0"
                          data-toggle="modal"
                          data-target="#modal-corporate-officer"
                          @click="edit_ExpenseType(expenseType_Data.indexOf(item))"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          class="btn btn-sm btn-danger m-0 ml-1"
                          @click="trashBusinessData(businessData.indexOf(item))"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </aside>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- / Business -->
  
          <!-- Contact and Address -->
          <div class="row mt-4" v-else-if="this.counter === 2">
            <table class="table table-sm table-bordered table-striped mx-2 ">
              <thead>
                <tr>
                  <th colspan="8" scope="col">
                    <aside class="d-flex align-items-center">
                      <span class="mb-1 ml-1"> Address</span>
                    </aside>
                  </th>
                  <th>
                    <aside class="text-center">
                      <button
                        class="btn btn-sm btn-success m-0"
                        data-toggle="modal"
                        data-target="#modal-address"
                        @click="setButton()"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </aside>
                  </th>
                </tr>
                <tr>
                  <th scope="col" class="text-center">#</th>
                  <th scope="col">Address Type</th>
                  <th scope="col">Address Line</th>
                  <th scope="col">City</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Email</th>
                  <th scope="col">Fax</th>
                  <th scope="col">Active</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
  
              <tbody style="font-size: 14px">
                <tr v-for="(item, index) in expenseType_Data" :key="item.id">
                  <td class="text-center">{{ index + 1 }}.</td>
                  <td>{{ item.date_ }}</td>
                  <td>{{ item.CLIENT_NAME }}</td>
                  <td>{{ item.EXPENSE_TYPE }}</td>
                  <td>{{ item.DESCRIPTION }}</td>
                  <td>{{ item.AMOUNT }}</td>
                  <td class="pl-0 m-0">
                    <aside class="d-flex justify-content-center">
                      <button
                        class="btn btn-sm btn-info m-0"
                        data-toggle="modal"
                        data-target="#modal-expenseType"
                        @click="edit_ExpenseType(expenseType_Data.indexOf(item))"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                      <button
                        class="btn btn-sm btn-danger m-0 ml-1"
                        @click="trash_ExpenseType(expenseType_Data.indexOf(item))"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </aside>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="table table-sm table-bordered table-striped mt-5 mx-2">
              <thead>
                <tr>
                  <th colspan="11" scope="col">
                    <aside class="d-flex align-items-center">
                      <span class="mb-1 ml-1"> Contact</span>
                    </aside>
                  </th>
                  <th>
                    <aside class="text-center">
                      <button
                        class="btn btn-sm btn-success m-0"
                        data-toggle="modal"
                        data-target="#modal-contact"
                        @click="setButton()"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </aside>
                  </th>
                </tr>
                <tr>
                  <th scope="col" class="text-center">#</th>
                  <th scope="col">Prefix</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Suffix</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Department</th>
                  <th scope="col">Mobile No.</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Work From</th>
                  <th scope="col">Active</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
  
              <tbody style="font-size: 14px">
                <tr v-for="(item, index) in expenseType_Data" :key="item.id">
                  <td class="text-center">{{ index + 1 }}.</td>
                  <td>{{ item.date_ }}</td>
                  <td>{{ item.CLIENT_NAME }}</td>
                  <td>{{ item.EXPENSE_TYPE }}</td>
                  <td>{{ item.DESCRIPTION }}</td>
                  <td>{{ item.AMOUNT }}</td>
                  <td class="pl-0 m-0">
                    <aside class="d-flex justify-content-center">
                      <button
                        class="btn btn-sm btn-info m-0"
                        data-toggle="modal"
                        data-target="#modal-expenseType"
                        @click="edit_ExpenseType(expenseType_Data.indexOf(item))"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                      <button
                        class="btn btn-sm btn-danger m-0 ml-1"
                        @click="trash_ExpenseType(expenseType_Data.indexOf(item))"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </aside>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /. Contact and Address -->
  
          <!-- Purchasing -->
          <div class="mt-4" v-else-if="this.counter === 3">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="reference">Brand</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="purchasing.brand"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="reference">Product Line</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="reference">Services</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >Contact Person</label
                    ></small
                  >
                  <model-list-select
                    :list="vendorList"
                    v-model="vendorSelected"
                    option-value="code"
                    option-text="name"
                    placeholder="select item"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >PO to be sent via</label
                    ></small
                  >
                  <model-list-select
                    :list="poToBeSentList"
                    v-model="poToBeSentSelected"
                    option-value="code"
                    option-text="name"
                    placeholder="select item"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="reference">Contact Details</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Ordering Preferences</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Delivery/Shipping Preferences</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Documentation Preferences</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Payment Preferences</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-12">
                <small><label for="purpose">Attachments</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-12">
                <div class="form-group">
                  <small><label for="purpose">Attachment Short Name</label></small>
                  <textarea
                    class="form-control"
                    name="purpose"
                    id="purpose"
                    v-model.trim="purpose"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <!-- /. Purchasing -->
  
          <!-- Accounting -->
          <div class="mt-4" v-else-if="this.counter === 4">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >ATC</label
                    ></small
                  >
                  <model-list-select
                    :list="AccountATCList"
                    v-model="AccountATCSelected"
                    option-value="code"
                    option-text="atc"
                    placeholder="select item"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="reference">Nature of Income Payment</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="AccountDescSelected"
                    readonly
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="reference">Tax Rate</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="AccountRateSelected"
                    readonly
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >Bank</label
                    ></small
                  >
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Branch</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Contact Person</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Telephone Number</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                  />
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <table class="table table-sm table-bordered table-striped mx-2">
                <thead>
                  <tr>
                    <th colspan="8" scope="col">
                      <aside class="d-flex align-items-center">
                        <span class="mb-1 ml-1"> Banking Information</span>
                      </aside>
                    </th>
                    <th>
                      <aside class="text-center">
                        <button
                          class="btn btn-sm btn-success m-0"
                          data-toggle="modal"
                          data-target="#modal-banking-info"
                          @click="setButton()"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </aside>
                    </th>
                  </tr>
                  <tr>
                    <th scope="col" class="text-center">#</th>
                    <th scope="col">Bank Name</th>
                    <th scope="col">Bank Account Number</th>
                    <th scope="col">Bank Branch</th>
                    <th scope="col">Account Currency</th>
                    <th scope="col">Swift Code</th>
                    <th scope="col">Preferred Bank Account</th>
                    <th scope="col">Active</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
    
                <tbody style="font-size: 14px">
                  <tr v-for="(item, index) in expenseType_Data" :key="item.id">
                    <td class="text-center">{{ index + 1 }}.</td>
                    <td>{{ item.date_ }}</td>
                    <td>{{ item.CLIENT_NAME }}</td>
                    <td>{{ item.EXPENSE_TYPE }}</td>
                    <td>{{ item.DESCRIPTION }}</td>
                    <td>{{ item.AMOUNT }}</td>
                    <td class="pl-0 m-0">
                      <aside class="d-flex justify-content-center">
                        <button
                          class="btn btn-sm btn-info m-0"
                          data-toggle="modal"
                          data-target="#modal-expenseType"
                          @click="edit_ExpenseType(expenseType_Data.indexOf(item))"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          class="btn btn-sm btn-danger m-0 ml-1"
                          @click="trash_ExpenseType(expenseType_Data.indexOf(item))"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </aside>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- / Accounting -->

          <!-- Technical and Support -->
          <div class="mt-4" v-else-if="(this.counter === 5)">
            <div class="row mt-4">
              <div class="col-md-6">
                <div class="form-group">
                  <small><label for="purpose">Warranty Information</label></small>
                  <textarea
                    class="form-control"
                    name="purpose"
                    id="purpose"
                    v-model.trim="purpose"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <small><label for="purpose">RMA Policy and Note</label></small>
                  <textarea
                    class="form-control"
                    name="purpose"
                    id="purpose"
                    v-model.trim="purpose"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-12">
                <small><label for="purpose">Attachments</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-12">
                <div class="form-group">
                  <small><label for="purpose">Attachment Short Name</label></small>
                  <textarea
                    class="form-control"
                    name="purpose"
                    id="purpose"
                    v-model.trim="purpose"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <!-- / Technical and Support -->

          <!-- Related To -->
          <div class="row mt-4" v-else-if="(this.counter === 6)">
            <table class="table table-sm table-bordered table-striped mx-2">
              <thead>
                <tr>
                  <th colspan="4" scope="col">
                    <aside class="d-flex align-items-center">
                      <span class="mb-1 ml-1"> Related Vendors</span>
                    </aside>
                  </th>
                  <th>
                    <aside class="text-center">
                      <button
                        class="btn btn-sm btn-success m-0"
                        data-toggle="modal"
                        data-target="#modal-related-vendor"
                        @click="setButton()"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </aside>
                  </th>
                </tr>
                <tr>
                  <th scope="col" class="text-center">#</th>
                  <th scope="col">Relationship</th>
                  <th scope="col">Vendor Code</th>
                  <th scope="col">Vendor Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
  
              <tbody style="font-size: 14px">
                <tr v-for="(item, index) in expenseType_Data" :key="item.id">
                  <td class="text-center">{{ index + 1 }}.</td>
                  <td>{{ item.date_ }}</td>
                  <td>{{ item.CLIENT_NAME }}</td>
                  <td>{{ item.EXPENSE_TYPE }}</td>
                  <td>{{ item.DESCRIPTION }}</td>
                  <td>{{ item.AMOUNT }}</td>
                  <td class="pl-0 m-0">
                    <aside class="d-flex justify-content-center">
                      <button
                        class="btn btn-sm btn-info m-0"
                        data-toggle="modal"
                        data-target="#modal-expenseType"
                        @click="edit_ExpenseType(expenseType_Data.indexOf(item))"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                      <button
                        class="btn btn-sm btn-danger m-0 ml-1"
                        @click="trash_ExpenseType(expenseType_Data.indexOf(item))"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </aside>
                  </td>
                </tr>
              </tbody>
            </table>

            <table class="table table-sm table-bordered table-striped mx-2 mt-5">
              <thead>
                <tr>
                  <th colspan="4" scope="col">
                    <aside class="d-flex align-items-center">
                      <span class="mb-1 ml-1"> Related Customers</span>
                    </aside>
                  </th>
                  <th>
                    <aside class="text-center">
                      <button
                        class="btn btn-sm btn-success m-0"
                        data-toggle="modal"
                        data-target="#modal-related-customer"
                        @click="setButton()"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </aside>
                  </th>
                </tr>
                <tr>
                  <th scope="col" class="text-center">#</th>
                  <th scope="col">Relationship</th>
                  <th scope="col">Customer Code</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
  
              <tbody style="font-size: 14px">
                <tr v-for="(item, index) in expenseType_Data" :key="item.id">
                  <td class="text-center">{{ index + 1 }}.</td>
                  <td>{{ item.date_ }}</td>
                  <td>{{ item.CLIENT_NAME }}</td>
                  <td>{{ item.EXPENSE_TYPE }}</td>
                  <td>{{ item.DESCRIPTION }}</td>
                  <td>{{ item.AMOUNT }}</td>
                  <td class="pl-0 m-0">
                    <aside class="d-flex justify-content-center">
                      <button
                        class="btn btn-sm btn-info m-0"
                        data-toggle="modal"
                        data-target="#modal-expenseType"
                        @click="edit_ExpenseType(expenseType_Data.indexOf(item))"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                      <button
                        class="btn btn-sm btn-danger m-0 ml-1"
                        @click="trash_ExpenseType(expenseType_Data.indexOf(item))"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </aside>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /. Related To -->

          <!-- Attachments -->
          <div class="mt-4" v-else-if="(this.counter === 7)">
            <div class="row mt-4">
              <div class="col-md-12">
                <small><label for="purpose">Accomplished Vendor Information Sheet</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <small><label for="purpose">Business Registration</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <small><label for="purpose">Updated Business Permit</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <small><label for="purpose">BIR Certificate of Registration: BIR 2303 form</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <small><label for="purpose">Sample of Delivery Receipt, Sales Invoice, Official Receipt</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <small><label for="purpose">Company/Business Profile</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <small><label for="purpose">Latest Audited Financial Statements</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- / Attachments -->

          <!-- Distribution and Agreement -->
          <div class="mt-4" v-else-if="(this.counter === 8)">
            <div class="row">
              <table class="table table-sm table-bordered table-striped mx-2">
                <thead>
                  <tr>
                    <th colspan="6" scope="col">
                      <aside class="d-flex align-items-center">
                        <span class="mb-1 ml-1"> Sales Target</span>
                      </aside>
                    </th>
                    <th>
                      <aside class="text-center">
                        <button
                          class="btn btn-sm btn-success m-0"
                          data-toggle="modal"
                          data-target="#modal-related-vendor"
                          @click="setButton()"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </aside>
                    </th>
                  </tr>

                  <tr>
                    <th class="text-center" colspan="3">Fiscal Year</th>
                  </tr>

                  <tr>
                    <th scope="col" class="text-center">#</th>
                    <th scope="col">Month Start</th>
                    <th scope="col">Month End</th>
                    <th scope="col">Annual Target</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Total Order</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
    
                <tbody style="font-size: 14px">
                  <tr v-for="(item, index) in expenseType_Data" :key="item.id">
                    <td class="text-center">{{ index + 1 }}.</td>
                    <td>{{ item.date_ }}</td>
                    <td>{{ item.CLIENT_NAME }}</td>
                    <td>{{ item.EXPENSE_TYPE }}</td>
                    <td>{{ item.DESCRIPTION }}</td>
                    <td>{{ item.AMOUNT }}</td>
                    <td class="pl-0 m-0">
                      <aside class="d-flex justify-content-center">
                        <button
                          class="btn btn-sm btn-info m-0"
                          data-toggle="modal"
                          data-target="#modal-expenseType"
                          @click="edit_ExpenseType(expenseType_Data.indexOf(item))"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          class="btn btn-sm btn-danger m-0 ml-1"
                          @click="trash_ExpenseType(expenseType_Data.indexOf(item))"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </aside>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 class="mt-5 text-center font-weight-bold">Specific Attachments</h4>
            <div class="row">
              <div class="col-md-12">
                <small><label for="purpose">Agreement</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <small><label for="purpose">NDA</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-12">
                <small><label for="purpose">Distributor Certificate</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h4 class="mt-5 text-center font-weight-bold">Other Attachments</h4>
            <div class="row">
              <div class="col-md-12">
                <small><label for="purpose">Attachments</label></small>
                <div 
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    text-center
                    position-relative
                  "
                  id="app"
                >
                  <div
                    class="pt-2 col-md-12 rounded uploadContainer"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="drop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="onFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedDBFile"
                        :key="file.newFilename"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span
                                ><label>{{ file.originalFilename ? file.originalFilename : file.filename }}</label></span
                              >
                            </div>
      
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="removeReAttachments(file.id, selectedDBFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                            </div>
                            <div class="ml-1">
                              <a class="btn btn-secondary btn-sm"  :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                            </div>
      
                          </div>
                        </div>
                      </li>
                    </ul>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in selectedFile"
                        :key="file.name"
                      >
                        <div class="row d-flex justify-content-center">
                          <div class="col-md-4 d-flex">
                            <div class="col text-left">
                              <span><label>{{ file.name }}</label></span>
                            </div>
                            <div>
                              <button
                                class="btn btn-danger btn-sm px-13"
                                type="button"
                                @click="remove(selectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="preview(selectedFile.indexOf(file))"
                                class="btn btn-secondary btn-sm"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-md-12">
                <div class="form-group">
                  <small><label for="purpose">Attachment Short Name</label></small>
                  <textarea
                    class="form-control"
                    name="purpose"
                    id="purpose"
                    v-model.trim="purpose"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <!-- Distribution and Agreement -->
  
          <!--  Form Review -->
          <aside v-else-if="(this.counter === 9)">
            <div class="card card-secondary mt-4">
              <div class="card-header">
                <h3 class="card-title">Request Details</h3>
  
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <tbody>
                    <tr>
                      <td>Reference Number</td>
                      <td style="width: 80%">{{ "RE-" + todaysYear }}</td>
                    </tr>
                    <tr>
                      <td>Requested Date</td>
                      <td>{{ this.requestDate }}</td>
                    </tr>
                    <tr>
                      <td>Date Needed</td>
                      <td>{{ this.dateNeeded }}</td>
                    </tr>
                    <tr>
                      <td>Reporting Manager</td>
                      <td>{{ this.reportingManagerItem.name }}</td>
                    </tr>
                    <tr>
                      <td>Project Name</td>
                      <td>{{ this.projectItem.name }}</td>
                    </tr>
                    <tr>
                      <td>Client Name</td>
                      <td>{{ this.clientName }}</td>
                    </tr>
                    <tr>
                      <td>Purpose</td>
                      <td>{{ this.purpose }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
  
            <!-- Payment Details -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Payment Details</h3>
  
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <tbody>
                    <tr>
                      <td>Payee Name</td>
                      <td style="width: 80%">{{ this.payeeName }}</td>
                    </tr>
                    <tr>
                      <td>Mode of Payment</td>
                      <td>{{ this.modeOfPaymentItem.name }}</td>
                    </tr>
                    <tr>
                      <td>Currency</td>
                      <td>{{ this.currencyItem.name }}</td>
                    </tr>
                    <tr>
                      <td>Amount</td>
                      <td>{{ this.amount }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
            <!-- /.Payment Details -->
  
            <!-- Expense Details Review -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Expense Table</h3>
  
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 5%">#</th>
                      <th style="width: 10%">Date</th>
                      <th style="width: 20%">Client Name</th>
                      <th style="width: 20%">Expense Type</th>
                      <th style="width: 30%">Remarks</th>
                      <th style="width: 10%">Amount</th>
  
                      <!-- <th style="width: 10%">Action</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in expenseType_Data" :key="item.id">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.date_ }}</td>
                      <td>{{ item.CLIENT_NAME }}</td>
                      <td>{{ item.EXPENSE_TYPE }}</td>
                      <td>{{ item.DESCRIPTION }}</td>
                      <td>{{ item.AMOUNT }}</td>
                    </tr>
  
                    <tr>
                      <td colspan="5"></td>
                      <b class="px-1"
                        >Total: {{ this.expenseType_totalAmount }}</b
                      >
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.Expense Details Review -->
  
            <!-- Transportation Details Review -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Transporation Expense Table</h3>
  
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 5%">#</th>
                      <th style="width: 10%">Date</th>
                      <th style="width: 15%">Client Name</th>
                      <th style="width: 10%">Destination From</th>
                      <th style="width: 10%">Destination To</th>
                      <th style="width: 20%">Mode of Transportation</th>
                      <th style="width: 10%">Remarks</th>
                      <th style="width: 10%">Amount</th>
                      <!-- <th style="width: 10%">Action</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in transpoSetup_Data" :key="item.id">
                      <td>{{ index + 1 }}</td>
                      <td>{{ item.date_ }}</td>
                      <td>{{ item.CLIENT_NAME }}</td>
                      <td>{{ item.DESTINATION_FRM }}</td>
                      <td>{{ item.DESTINATION_TO }}</td>
                      <td>{{ item.MOT }}</td>
                      <td>{{ item.DESCRIPTION }}</td>
                      <td>{{ item.AMT_SPENT }}</td>
                    </tr>
  
                    <tr>
                      <td colspan="7"></td>
                      <b class="px-1"
                        >Total: {{ this.transpoSetup_totalAmount }}</b
                      >
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.Transportation Details Review -->
  
            <!-- Attachments Review -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Attachments</h3>
  
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 80%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in selectedDBFile" :key="file.id">
                      <td>{{ file.filename }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-info btn-sm" :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`" target="_blank">Download</a>
                        <a class="btn btn-secondary btn-sm ml-1" :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`" target="_blank">Preview</a>
                      </td>
                    </tr>
                    <tr v-for="file in selectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="remove(selectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="preview(selectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
            <!-- ./Attachments Review -->
          </aside>
          <!-- / Form Review -->
  
          <!-- Modal Corporate Officer jomel -->
          <div
            class="modal fade"
            id="modal-corporate-officer"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title">
                    <b>Corporate Officers</b>
                  </h6>
                  <button
                    type="button"
                    id="modalCloseButton"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="closeModal()"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <the-alert
                    v-show="isAlert"
                    v-bind:header="this.header"
                    v-bind:message="this.message"
                    v-bind:type="this.type"
                  ></the-alert>
  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small><label for="reference">Prefix</label></small>
  
                        <model-list-select
                          :list="prefixesList"
                          v-model="prefixesSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                       
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">First Name</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="business.firstName"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Last Name</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="business.lastName"
                        />
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Suffix</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="business.suffix"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Designation</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="business.designation"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    v-if="isButton"
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="insertCorporateOfficers()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="update_ExpenseType()"
                  >
                    Update
                  </button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
          <!-- /. Modal Corporate Officer -->

          <!-- Modal Contact -->
          <div
            class="modal fade"
            id="modal-contact"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title">
                    <b>Contact</b>
                  </h6>
                  <button
                    type="button"
                    id="modalCloseButton"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="closeModal()"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <the-alert
                    v-show="isAlert"
                    v-bind:header="this.header"
                    v-bind:message="this.message"
                    v-bind:type="this.type"
                  ></the-alert>
  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small><label for="reference">Prefix</label></small>
  
                        <model-list-select
                          :list="modalclient"
                          v-model="itemclientName"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                       
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">First Name</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Last Name</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Sufix</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Nickname</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Designation</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Department</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Work From</label></small
                        >
                        <model-list-select
                          :list="contactStatusList"
                          v-model="contactStatusSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Link to</label></small
                        >
                        <model-list-select
                          :list="contactLinkToList"
                          v-model="contactLinkToSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Status</label></small
                        >
                        <model-list-select
                          :list="contactStatusList"
                          v-model="contactStatusSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Mobile No.</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-check" style="margin-top: 2.3rem;">
                          <input class="form-check-input" type="checkbox" value="" id="mobileNumberSubscribedCheckbox">
                          <label class="form-check-label" for="mobileNumberSubscribedCheckbox">
                            Mobile No. Subscribed
                          </label>
                        </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Email Address</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-check" style="margin-top: 2.3rem;">
                          <input class="form-check-input" type="checkbox" value="" id="emailAddressSubscribedCheckbox">
                          <label class="form-check-label" for="emailAddressSubscribedCheckbox">
                            Email Address Subscribed
                          </label>
                        </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <small><label for="purpose">Notes</label></small>
                        <textarea
                          class="form-control"
                          name="purpose"
                          id="purpose"
                          v-model.trim="purpose"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    v-if="isButton"
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="insert_ExpenseType()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="update_ExpenseType()"
                  >
                    Update
                  </button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
          <!-- /. Modal Contact -->

          <!-- Modal Address -->
          <div
            class="modal fade"
            id="modal-address"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title">
                    <b>Address</b>
                  </h6>
                  <button
                    type="button"
                    id="modalCloseButton"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="closeModal()"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <the-alert
                    v-show="isAlert"
                    v-bind:header="this.header"
                    v-bind:message="this.message"
                    v-bind:type="this.type"
                  ></the-alert>
  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small><label for="reference">Address Type</label></small>
  
                        <model-list-select
                          :list="addressTypeList"
                          v-model="addressTypeSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                       
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Address Short Name</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Address Line</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Address Line 2</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">City</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Region/Province</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Zip Code</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Country</label></small
                        >
                        <model-list-select
                          :list="countriesList"
                          v-model="countriesSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Status</label></small
                        >
                        <model-list-select
                          :list="addressStatusList"
                          v-model="addressStatusSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Phone No.</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Email</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Fax</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Business Hours</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="billingAddressCheckbox">
                        <label class="form-check-label" for="billingAddressCheckbox">
                          Preferred Billing Address
                        </label>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="billingShippingCheckbox">
                        <label class="form-check-label" for="billingShippingCheckbox">
                          Preferred Shipping Address
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <small><label for="purpose">Notes</label></small>
                        <textarea
                          class="form-control"
                          name="purpose"
                          id="purpose"
                          v-model.trim="purpose"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    v-if="isButton"
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="insert_ExpenseType()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="update_ExpenseType()"
                  >
                    Update
                  </button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
          <!-- /. Modal Address -->

          <!-- Modal Banking Information -->
          <div
            class="modal fade"
            id="modal-banking-info"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title">
                    <b>Banking Information</b>
                  </h6>
                  <button
                    type="button"
                    id="modalCloseButton"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="closeModal()"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <the-alert
                    v-show="isAlert"
                    v-bind:header="this.header"
                    v-bind:message="this.message"
                    v-bind:type="this.type"
                  ></the-alert>
  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small><label for="reference">Bank Name</label></small>
  
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                       
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Bank Account Number</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>
  
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Bank Branch</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Account Currency</label></small
                        >
                        <model-list-select
                          :list="currenciesList"
                          v-model="currenciesSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Swift Code</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
  
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Preferred Bank Account</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                        />
                      </div>
                    </div>
                  </div>

                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    v-if="isButton"
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="insert_ExpenseType()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="update_ExpenseType()"
                  >
                    Update
                  </button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
          <!-- /. Modal Banking Information -->

          <!-- Modal Related Vendors -->
          <div
            class="modal fade"
            id="modal-related-vendor"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title">
                    <b>Related Vendors</b>
                  </h6>
                  <button
                    type="button"
                    id="modalCloseButton"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="closeModal()"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <the-alert
                    v-show="isAlert"
                    v-bind:header="this.header"
                    v-bind:message="this.message"
                    v-bind:type="this.type"
                  ></the-alert>
  
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Relationship</label></small
                        >
                        <model-list-select
                          :list="relationshipList"
                          v-model="relationshipSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Vendor Code</label></small
                        >
                        <model-list-select
                          :list="relatedSupplierList"
                          v-model="relatedSupplierCodeSelected"
                          option-value="code"
                          option-text="code"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Vendor Name</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="relatedSupplierNameSelected"
                          readonly
                        />
                      </div>
                    </div>
                  </div>

                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    v-if="isButton"
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="insert_ExpenseType()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="update_ExpenseType()"
                  >
                    Update
                  </button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
          <!-- /. Modal Related Vendors -->

          <!-- Modal Related Customers -->
          <div
            class="modal fade"
            id="modal-related-customer"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title">
                    <b>Related Customers</b>
                  </h6>
                  <button
                    type="button"
                    id="modalCloseButton"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    @click="closeModal()"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <the-alert
                    v-show="isAlert"
                    v-bind:header="this.header"
                    v-bind:message="this.message"
                    v-bind:type="this.type"
                  ></the-alert>
  
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Relationship</label></small
                        >
                        <model-list-select
                          :list="relationshipList"
                          v-model="relationshipSelected"
                          option-value="code"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Customer Code</label></small
                        >
                        <model-list-select
                          :list="relatedCustomerList"
                          v-model="relatedCustomerCodeSelected"
                          option-value="code"
                          option-text="code"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Customer Name</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="relatedCustomerNameSelected"
                          readonly
                        />
                      </div>
                    </div>
                  </div>

                </div>
                <div class="modal-footer justify-content-end">
                  <button
                    v-if="isButton"
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="insert_ExpenseType()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="update_ExpenseType()"
                  >
                    Update
                  </button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
          <!-- /. Modal Related Customers -->
  
          <!-- / Main Form -->
  
        
          
        </div>
      </div>
      <!-- /.card -->
    </div>
  </template>
  
  <script>
  import { ModelListSelect } from "vue-search-select";
  import axios from "axios";
  import VsToast from "@vuesimple/vs-toast";
  export default {
    components: {
      ModelListSelect,
    },
    async created() {
      // Request Details
      this.isLoading = true
      await this.getPaymentTerms()
      await this.getCurrencies()
      await this.getBusinessTaxStatus()
      await this.getBusinessType()
      await this.getBusinessNature()
      await this.getPrefixes()
      await this.getCountries()
      await this.getATC()
      await this.getRelationship()
      await this.getRelatedSupplier()
      await this.getRelatedCustomer()




      await this.getREbyUserID();
      await this.todaysDate();
  
      await this.reInitiate();
      this.isLoading = false
  
    },
    watch: {
      AccountATCSelected(newValue) {
        this.AccountDescSelected = newValue.description
        this.AccountRateSelected = newValue.rate
      },
      relatedSupplierCodeSelected(newValue) {
        this.relatedSupplierNameSelected = newValue.name
      },
      relatedCustomerCodeSelected(newValue) {
        this.relatedCustomerNameSelected = newValue.name
      },
      vendorSelected(newValue) {
          console.log(newValue.name);
          console.log(this.general.website);
          console.log(this.general.inBusinessSince);
          console.log(this.paymentTermsSelected.name);
          console.log(this.general.creditLimit);
          console.log(this.currenciesSelected.name);
          console.log(this.businessTaxStatusSelected.name);
          console.log(this.requestDate); //last update date
          console.log(this.general.lastUpdateBy);
          console.log(this.general.tinNumber);
          console.log(this.general.twentyThreeZeroThree);
          console.log(this.general.secNumber);
          console.log(this.general.notes);
          console.log(this.businessTypeSelected.name);
          console.log(this.businessNatureSelected.name);
          console.log(this.business.authorizedCapitalStock);
          console.log(this.business.paidUpCapitalStock);
          console.log(this.business.notes);
      },
      VATselected(newValue) {
          console.log(newValue.name);
      },
      // Request Details
      projectItem(newValue) {
        this.getClient(newValue.code);
      },
  
      counter() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
  
      expenseType_totalAmount() {
        this.re_totalAmount();
      },
      transpoSetup_totalAmount() {
        this.re_totalAmount();
      },
    },
    computed: {
      classA() {
        return { active: this.counter >= 0 };
      },
      classB() {
        return { active: this.counter >= 1 };
      },
      classC() {
        return { active: this.counter >= 2 };
      },
      classD() {
        return { active: this.counter >= 3 };
      },
      classE() {
        return { active: this.counter >= 4 };
      },
      classF() {
        return { active: this.counter >= 5 };
      },
      classG() {
        return { active: this.counter >= 6 };
      },
      classH() {
        return { active: this.counter >= 7 };
      },
      classI() {
        return { active: this.counter >= 8 };
      },
      classZ() {
        return { active: this.counter >= 9 };
      },
  
      // Calendaer
      todaysYear() {
        const today = new Date();
        // const dd = today.getDate();
        // const mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();
        // const todaysDate = yyyy + "-" + mm + "-" + dd;
        return yyyy;
      },
  
      // Validation
      missingDateNeeded() {
        if (this.dateNeeded === null) {
          return true;
        } else {
          return false;
        }
      },
  
      missingReportingManager() {
        if (this.reportingManagerItem.code === undefined) {
          return true;
        } else {
          return false;
        }
      },
  
      missingProjectItem() {
        if (this.projectItem.code === undefined) {
          return true;
        } else {
          return false;
        }
      },
  
      missingPurpose() {
        if (this.purpose.length === 0) {
          return true;
        } else {
          return false;
        }
      },
  
      missingPayeeName() {
        if (this.payeeName.length === 0) {
          return true;
        } else {
          return false;
        }
      },
  
      missingAmount() {
        if (this.amount.length === 0 || parseFloat(this.amount) < 1) {
          return true;
        } else {
          return false;
        }
      },
  
      missingAttachments() {
        if (this.selectedFile.length === 0 && this.selectedDBFile.length === 0) {
          return true;
        } else {
          return false;
        }
      },
  
      missingXPDateNeeded() {
        if (this.expenseType_Date === null) {
          return true;
        } else {
          return false;
        }
      },
  
      missingXPClientItem() {
        if (this.itemclientName.code === undefined) {
          return true;
        } else {
          return false;
        }
      },
  
      missingXPAmount() {
        if (
          this.expenseType_Amount.length === 0 ||
          parseFloat(this.expenseType_Amount) < 1
        ) {
          return true;
        } else {
          return false;
        }
      },
  
      missingXPType() {
        if (this.itemmodalExpenseType.code === undefined) {
          return true;
        } else {
          return false;
        }
      },
  
      missingXPRemarks() {
        if (this.expenseType_Remarks.length === 0) {
          return true;
        } else {
          return false;
        }
      },
  
      missingTDDateNeeded() {
        if (this.transpoSetup_Date === null) {
          return true;
        } else {
          return false;
        }
      },
  
      missingTDClientItem() {
        if (this.itemclientName.code === undefined) {
          return true;
        } else {
          return false;
        }
      },
  
      missingTDMot() {
        if (this.itemtranspoSetup.code === undefined) {
          return true;
        } else {
          return false;
        }
      },
  
      missingTDAmount() {
        if (
          this.transpoSetup_Amount.length === 0 ||
          parseFloat(this.transpoSetup_Amount) < 1
        ) {
          return true;
        } else {
          return false;
        }
      },
  
      missingTDFrom() {
        if (this.transpoSetup_From.length === 0) {
          return true;
        } else {
          return false;
        }
      },
  
      missingTDTo() {
        if (this.transpoSetup_to.length === 0) {
          return true;
        } else {
          return false;
        }
      },
  
      missingTDRemarks() {
        if (this.transpoSetup_Remarks.length === 0) {
          return true;
        } else {
          return false;
        }
      },
  
      missingExpenses() {
        if (
          this.transpoSetup_Data.length > 0 ||
          this.expenseType_Data.length > 0
        ) {
          return true;
        } else {
          return false;
        }
      },
  
      // Sum of all amount spend in liquidation
      expenseType_totalAmount() {
        if (this.expenseType_Data.length > 0) {
          let total = this.expenseType_Data
            .map((expenseType_Data) =>
              // convert money type string to float
              parseFloat(expenseType_Data.AMOUNT.replace(/,/g, ""))
            )
            .reduce((acc, expenseType_Data) => expenseType_Data + acc);
          // convert to money type
          return total.toLocaleString(undefined, { minimumFractionDigits: 2 });
        } else {
          return 0;
        }
      },
  
      // sum of all amount spend in transportation
      transpoSetup_totalAmount() {
        if (this.transpoSetup_Data.length > 0) {
          let total = this.transpoSetup_Data
            .map((transpoSetup_Data) =>
              // convert money type string to float
              parseFloat(transpoSetup_Data.AMT_SPENT.replace(/,/g, ""))
            )
            .reduce((acc, transpoSetup_Data) => transpoSetup_Data + acc);
          // convert to money type
          return total.toLocaleString(undefined, { minimumFractionDigits: 2 });
        } else {
          return 0;
        }
      },
    },
    data() {
      return {
        counter: 0,
        setIndex: 0,
  
        attemptNext: false,
        attemptNextOne: false,
        attemptNextTwo: false,
        attemptNextThree: false,
  
        attemptXpSubmit: false,
        attemptTdSubmit: false,
  
        // Request Details
        reportingManager: [],
        reportingManagerItem: {},
        referenceNumber: "",
        requestDate: "",
        project: [],
        projectItem: {},
        dateNeeded: null,
        clientName: "",
        clientId: "",
        mainId: "",
        purpose: "",
  
        // Payment Details
        modeOfPayment: [
          { code: "Cash", name: "Cash" },
          { code: "Check", name: "Check" },
          { code: "Credit to Account", name: "Credit to Account" },
        ],
        modeOfPaymentItem: {code: "Cash", name: "Cash"},
        currency: [
          { code: "PHP", name: "PHP" },
          { code: "AUD", name: "AUD" },
          { code: "CAD", name: "CAD" },
          { code: "EUR", name: "EUR" },
          { code: "USD", name: "USD" },
        ],
        currencyItem: { code: "PHP", name: "PHP" },
        payeeName: "",
        amount: "",
        realAmount: "",
  
        // expense data modal
        modalclient: [],
        itemclientName: {},
        modalExpenseType: [],
        itemmodalExpenseType: {},
        expenseType_Date: null,
        expenseType_Amount: "",
        expenseType_RealAmount: "",
        expenseType_Remarks: "",
  
        // The Attachments
        selectedFile: [],
        filespreview: [],
  
        isButton: true,
  
        // data for expense type
        expenseType_Data: [],
        expenseType_EditData: [],
        i: 0,
  
        // The Alert
        isAlert: false,
        header: "", // Syccess or Failed
        message: "", // added successfully
        type: "", // true or false
  
        // data for transportation
        transpoSetup: [],
        itemtranspoSetup: {},
        transpoSetup_Date: null,
        transpoSetup_Amount: "",
        transpoSetup_RealAmount: "",
        transpoSetup_From: "",
        transpoSetup_to: "",
        transpoSetup_Remarks: "",
  
        transpoSetup_Data: [],
        transpoSetup_EditData: [],
        selectedDBFile : [],
        idOfAttachmentsToDelete : [],
  
        // Logged User Data
        loggedUserId: localStorage.getItem("id"),
        loggedUserFirstName: localStorage.getItem("fname"),
        loggedUserLastName: localStorage.getItem("lname"),
        loggedUserDepartment: localStorage.getItem("department"),
        loggedUserPosition: localStorage.getItem("positionName"),
        companyId: localStorage.getItem("companyId"),
        companyName: localStorage.getItem("companyName"),
  
        isLoading: false,
        isSpinner: false,
  
        
        VATselected: {},
        
        VATlist: [
            { code: 1, name: "Non-Vat" },
            { code: 2, name: "Zero Rated" },
            { code: 3, name: "Vatable" }
        ],

        // general
        vendorSelected: {},
        vendorList: [
          { code: 1, name: "Local" },
          { code: 2, name: "Foreign" }
        ],
        paymentTermsList : [],
        paymentTermsSelected : {},
        currenciesList : [],
        currenciesSelected : {},
        businessTaxStatusList : [],
        businessTaxStatusSelected : {},
        general: {
          website: '',
          inBusinessSince: '',
          creditLimit: '',
          lastUpdateBy: 'System Administrator',
          tinNumber: '',
          twentyThreeZeroThree: '',
          secNumber: '',
          notes: '',
        },

        // business 
        business: {
          authorizedCapitalStock : '',
          paidUpCapitalStock : '',
          notes : '',
          firstName : '',
          lastName : '',
          suffix : '',
          designation : '',
        },
        businessData : [],
        businessTypeList : [],
        businessTypeSelected : {},
        businessNatureList : [],
        businessNatureSelected : {},
        prefixesList : [],
        prefixesSelected : {},
        

        // Contact and Address 
        addressTypeSelected: {},
        addressTypeList: [
          { code: 1, name: "Home" },
          { code: 2, name: "Business" },
          { code: 3, name: "Billing" },
          { code: 4, name: "Shipping" },
          { code: 5, name: "Contract" },
          { code: 6, name: "AP Address" },
          { code: 7, name: "Recipient" },
        ],

        contactLinkToSelected: {},
        contactLinkToList: [
          { code: 1, name: "Sales" },
          { code: 2, name: "Technical" },
          { code: 3, name: "Accounting" },
          { code: 4, name: "Management" }
        ],

        addressStatusSelected: {},
        addressStatusList: [
          { code: 1, name: "Active" },
          { code: 2, name: "Inactive" }
        ],

        contactStatusSelected: {},
        contactStatusList: [
          { code: 1, name: "Active" },
          { code: 2, name: "Inactive" }
        ],

        countriesList : [],
        countriesSelected : {},

        //purchasing
        purchasing: {
          brand: ''
        },
        poToBeSentSelected: {},
        poToBeSentList: [
          { code: 1, name: "Email" },
          { code: 2, name: "Fax" },
          { code: 3, name: "Viber" },
          { code: 4, name: "WhatsApp" },
          { code: 5, name: "WeChat" },
          { code: 6, name: "Others" }
        ],

        // accounting
        AccountATCList : [],
        AccountATCSelected : {},
        AccountDescSelected : '',
        AccountRateSelected : '',
        
        // Related To
        relationshipList : [],
        relationshipSelected : {},

        relatedSupplierList : [],
        relatedSupplierCodeSelected : {},
        relatedSupplierNameSelected : '',

        relatedCustomerList : [],
        relatedCustomerCodeSelected : {},
        relatedCustomerNameSelected : '',
      };
    },
  
    methods: {
      trashBusinessData(index) {
        this.businessData.splice(index, 1);
      },
      insertCorporateOfficers() {
        this.resetAlert();
  
        const addData = {
          id: this.i++,
          prefix: this.prefixesSelected.name,
          firstName: this.business.firstName,
          lastName: this.business.lastName,
          suffix: this.business.suffix,
          designation: this.business.designation
        };
        console.log(addData);
        this.businessData.push(addData);

        // this.addAlert("Success", "Expense details added successfully!", "true");
        // this.addAlert("Failed", "Please complete required fields!", "false");
      },
      async getPaymentTerms() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getBusinessTerms`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let paymentTermsData = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].id,
              name: responseData[key].description,
            };
            paymentTermsData.push(request);
          }
          this.paymentTermsList = paymentTermsData
        }
      },
      async getCurrencies() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getCurrencies`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let data = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].id,
              name: responseData[key].item,
            };
            data.push(request);
          }
          this.currenciesList = data
        }
      },
      async getBusinessTaxStatus() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getBusinessTaxStatus`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let data = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].id,
              name: responseData[key].vatcode,
            };
            data.push(request);
          }
          this.businessTaxStatusList = data
        }
      },  
      async getBusinessType() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getBusinessType`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let data = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].ID,
              name: responseData[key].BusinessType,
            };
            data.push(request);
          }
          this.businessTypeList = data
        }
      },  
      async getBusinessNature() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getBusinessNature`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let data = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].ID,
              name: responseData[key].Nature,
            };
            data.push(request);
          }
          this.businessNatureList = data
        }
      }, 
      async getPrefixes() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getPrefixes`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let data = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].id,
              name: responseData[key].item,
            };
            data.push(request);
          }
          this.prefixesList = data
        }
      }, 
      async getCountries() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getCountries`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let data = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].id,
              name: responseData[key].Description,
            };
            data.push(request);
          }
          this.countriesList = data
        }
      }, 
      async getATC() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getATC`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let data = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].ID,
              description: responseData[key].DESCRIPTION,
              atc: responseData[key].ATC,
              rate: responseData[key].RATE,
            };
            data.push(request);
          }
          this.AccountATCList = data
        }
      }, 
      async getRelationship() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getRelationship`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let data = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].type,
              name: responseData[key].type
            };
            data.push(request);
          }
          this.relationshipList = data
        }
      }, 
      async getRelatedSupplier() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getRelatedSupplier`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let data = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].ACCOUNTNUMBER,
              name: responseData[key].business_fullname
            };
            data.push(request);
          }
          this.relatedSupplierList = data
        }
      }, 
      async getRelatedCustomer() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getRelatedCustomer`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          let data = [];
          for (const key in responseData) {
            const request = {
              code: responseData[key].ACCOUNTNUMBER,
              name: responseData[key].business_fullname
            };
            data.push(request);
          }
          this.relatedCustomerList = data
        }
      }, 
  
      getProjects2(){
        return axios.get(`http://127.0.0.1:8000/api/general-getprojects/${localStorage.getItem("companyId")}`);
      },
  
      getReportingManager2(){
        return axios.get(`http://127.0.0.1:8000/api/reporting-manager/${localStorage.getItem("id")}`);
      },
  
      getBusinesses2(){
        return axios.get(`http://127.0.0.1:8000/api/general-businesses/${localStorage.getItem("companyId")}`);
      },
  
      getexpenseType2(){
        return axios.get(`http://127.0.0.1:8000/api/get-expenseType`);
      },
      gettranspoSetup2(){
        return axios.get(`http://127.0.0.1:8000/api/get-transpoSetup`);
      },
  
      async reInitiate() {
        await Promise.all([this.getProjects2(), this.getReportingManager2(), this.getBusinesses2(), this.getexpenseType2(), this.gettranspoSetup2()])
        .then((results) => {
          const projects = results[0];
          const managers = results[1];
          const businesses = results[2];
          const expenses = results[3];
          const transpo = results[4];
  
        let project = [];
        for (const key in projects.data) {
          const request = {
            code: projects.data[key].project_id,
            name: projects.data[key].project_name,
          };
          project.push(request);
        }
        this.project = project;
  
        const reportingManager = [];
        for (const key in managers.data) {
          const request = {
            code: managers.data[key].RMID,
            name: managers.data[key].RMName,
          };
          reportingManager.push(request);
        }
        this.reportingManager = reportingManager;
  
  
        const client = [];
        for (const key in businesses.data) {
          const request = {
            code: businesses.data[key].businessNumber,
            name: businesses.data[key].businessName,
          };
          client.push(request);
        }
        this.modalclient = client;
  
        const modalExpenseType = [];
        for (const key in expenses.data[0]) {
          const request = {
            code: expenses.data[0][key].type,
            name: expenses.data[0][key].type,
          };
          modalExpenseType.push(request);
        }
        this.modalExpenseType = modalExpenseType;
  
        const transpoSetup = [];
        for (const key in transpo.data[0]) {
          const request = {
            code: transpo.data[0][key].MODE,
            name: transpo.data[0][key].MODE,
          };
          transpoSetup.push(request);
        }
        this.transpoSetup = transpoSetup;
        
  
  
  
        })
        
        .catch(error => {
          console.error(error);
          this.openToast(
              "top-right",
              "error",
              "Please Contact the administrator! and try again later"
          );
        });
      },
  
  
  
  
  
  
  
  
  
  
  
  
      re_totalAmount() {
        let xp_totalAmt = 0;
        let td_totalAmt = 0;
  
        if (this.expenseType_totalAmount === 0) {
          xp_totalAmt = 0;
        } else {
          xp_totalAmt = parseFloat(this.expenseType_totalAmount.replace(/,/g, ""))
        }
  
        if (this.transpoSetup_totalAmount === 0) {
          td_totalAmt = 0;
        } else {
          td_totalAmt = parseFloat(this.transpoSetup_totalAmount.replace(/,/g, ""))
        }
  
        const float_total = xp_totalAmt + td_totalAmt;
  
        const string_total = float_total.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        });
  
        this.changeAmount(string_total, float_total);
      },
  
      changeAmount(amount, realAmount) {
        this.amount = amount;
        this.realAmount = realAmount;
      },
  
      addAlert(header, message, type) {
        this.isAlert = true;
        this.header = header;
        this.message = message;
        this.type = type;
      },
  
      resetAlert() {
        this.isAlert = false;
        this.header = "";
        this.message = "";
        this.type = "";
      },

      next() {
        this.counter++;
      },
  
      // step by step validation
      next_orig() {
        if (this.counter === 0) {
          this.attemptNext = true;
        } else if (this.counter === 1) {
          this.attemptNext = false;
          this.attemptNextOne = true;
        } else if (this.counter === 2) {
          // console.log("expense details");
        } else if (this.counter === 3) {
          this.attemptNextOne = false;
          this.attemptNextTwo = true;
          // attachments
        } else if (this.counter === 4) {
          this.attemptNextTwo = false;
          this.attemptNextThree = true;
        }
  
        this.validateCurrentTab(this.counter);
      },
  
      validateCurrentTab(counter) {
        // Request Details
        if (counter === 0) {
          if (
            !this.missingDateNeeded &&
            !this.missingReportingManager &&
            !this.missingProjectItem &&
            !this.missingPurpose
          ) {
            this.counter++;
          }
          // Payment Details
        } else if (counter === 1) {
          if (
            !this.missingPayeeName &&
            !this.missingModeOfPayment &&
            !this.missingCurrency
            // !this.missingAmount
          ) {
            this.counter++;
          }
          // Expense Details
        } else if (counter === 2) {
          this.counter++;
          // Transpo Details
        } else if (counter === 3) {
          if (this.missingExpenses) {
            this.counter++;
          } else {
            this.openToast(
              "top-right",
              "warning",
              "Please provide your expenses!"
            );
          }
        } else if (counter === 4) {
          if (!this.missingAttachments) {
            this.counter++;
          } else {
            this.openToast(
              "top-right",
              "warning",
              "Please provide an attachments!"
            );
          }
        }
      },
  
      setButton() {
        this.isButton = true;
      },
  
      closeModal() {
        this.clear_expenseType();
        this.clear_transpo();
        this.resetAlert();
        this.attemptXpInsert = false;
        this.attemptTdInsert = false;
      },
  
      openToast(position, variant, message) {
        const toastTitle = variant.charAt(0).toUpperCase() + variant.slice(1);
        VsToast.show({
          title: `${toastTitle}`,
          message: `${message}`,
          variant,
          position,
        });
      },
  
      async getREbyUserID() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getREbyUserID/${this.loggedUserId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        
        if(responseData.length >= 1) {
          // console.log(responseData);
          this.dateNeeded = responseData[0].TRANS_DATE
          this.purpose = responseData[0].DESCRIPTION
          this.payeeName = responseData[0].PAYEE
  
          const reportingManager = {
            code: responseData[0].reportingManagerID,
            name: responseData[0].REPORTING_MANAGER
          };
          const project = {
            code: responseData[0].PRJID,
            name: responseData[0].PROJECT
          };
  
          this.reportingManagerItem = reportingManager
          this.projectItem = project
  
          this.getReExpenseByREID(responseData[0]['id'])
          this.getReTranspoByREID(responseData[0]['id'])
          this.getREAttachmentsByREQID(responseData[0]['id'])
        }
      },
  
      async getReExpenseByREID(reid) {
        const response = await fetch(
          `http://127.0.0.1:8000/api/get-ReExpense/${reid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        if(responseData.length >= 1) {
          // console.log(responseData);
          this.expenseType_Data = responseData
        }
      },
  
      async getReTranspoByREID(reid) {
        const response = await fetch(
          `http://127.0.0.1:8000/api/get-ReTranspo/${reid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        if(responseData.length >= 1) {
          // console.log(responseData);
          this.transpoSetup_Data = responseData
        }
      },
  
      async getREAttachmentsByREQID(reqid) {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getReGeneralAttachmentsByReqid/${reqid}/${this.loggedUserId}`,
  
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        if(responseData.length >= 1) {
          // console.log(responseData);
          this.selectedDBFile = responseData
        }
      },
  
      removeReAttachments(id, i) {
        console.log(id);
        this.selectedDBFile.splice(i, 1);
        this.idOfAttachmentsToDelete.push(id)
        // console.log(this.idOfAttachmentsToDelete);
      },
  
      async saveDraft() {
        this.isLoading = true;
        this.isSpinner = true;
        this.$refs.refSaveDraftCloseBtn.click()
  
        const fd = new FormData();
        for (let i = 0; i < this.selectedFile.length; i++) {
          fd.append("file[]", this.selectedFile[i]);
        }
  
        fd.append("reportingManagerId", this.reportingManagerItem.code);
        fd.append("reportingManagerName", this.reportingManagerItem.name);
        fd.append("projectName", this.projectItem.name);
        fd.append("projectId", this.projectItem.code);
        fd.append("dateNeeded", this.dateNeeded);
        fd.append("clientName", this.clientName);
        fd.append("clientId", this.clientId);
        fd.append("mainId", this.mainId);
        fd.append("purpose", this.purpose);
  
        fd.append("payeeName", this.payeeName);
        fd.append("amount", this.amount);
        fd.append("MOP", this.modeOfPaymentItem.name);
        fd.append("currency", this.currencyItem.name);
        fd.append("class", "RE");
        fd.append("form", "Reimbursement Request");
  
        fd.append("loggedUserId", this.loggedUserId);
        fd.append("loggedUserFirstName", this.loggedUserFirstName);
        fd.append("loggedUserLastName", this.loggedUserLastName);
        fd.append("loggedUserDepartment", this.loggedUserDepartment);
        fd.append("loggedUserPosition", this.loggedUserPosition);
        fd.append("companyId", this.companyId);
        fd.append("companyName", this.companyName);
  
        fd.append("expenseType_Data", JSON.stringify(this.expenseType_Data));
        fd.append("transpoSetup_Data", JSON.stringify(this.transpoSetup_Data));
        fd.append("idOfAttachmentsToDelete", JSON.stringify(this.idOfAttachmentsToDelete));
  
        try {
          const resp = await axios.post(
            "http://127.0.0.1:8000/api/saveDraftRe",
            fd
          );
  
          if (resp.status >= 200) {
            this.isLoading = false;
            this.openToast("top-right", "success", resp.data.message);
            this.$router.replace("/dashboard");
          }
  
          // console.log(resp.data);
          this.isSpinner = false;
        } catch (err) {
          this.isSpinner = false;
          console.error(err);
            this.isLoading = false;
            this.openToast(
              "top-right",
              "error",
              "Please Contact the administrator! and try again later"
            );
        }
      },
  
      async submit() {
        this.isLoading = true;
        const fd = new FormData();
  
        for (let i = 0; i < this.selectedFile.length; i++) {
          fd.append("file[]", this.selectedFile[i]);
        }
  
        // console.log(this.reportingManagerItem.code)
        // console.log(this.reportingManagerItem.name)
        // // console.log(this.referenceNumber)
        // console.log(this.requestDate)
        // console.log(this.projectItem.name)
        // console.log(this.projectItem.code)
        // console.log(this.dateNeeded)
        // console.log(this.clientName)
        // console.log(this.clientId)
        // console.log(this.mainId)
        // console.log(this.purpose)
  
        // console.log(this.payeeName)
        // console.log(this.amount)
        // console.log(this.modeOfPaymentItem.name)
        // console.log(this.currencyItem.name)
  
        // console.log(loggedUserId)
        // console.log(loggedUserFirstName)
        // console.log(loggedUserLastName)
        // console.log(loggedUserDepartment)
        // console.log(loggedUserPosition)
        // console.log(companyId)
        // console.log(companyName)
  
        fd.append("reportingManagerId", this.reportingManagerItem.code);
        fd.append("reportingManagerName", this.reportingManagerItem.name);
        // fd.append("",this.referenceNumber)
        // fd.append("",this.requestDate)
        fd.append("projectName", this.projectItem.name);
        fd.append("projectId", this.projectItem.code);
        fd.append("dateNeeded", this.dateNeeded);
        fd.append("clientName", this.clientName);
        fd.append("clientId", this.clientId);
        fd.append("mainId", this.mainId);
        fd.append("purpose", this.purpose);
  
        fd.append("payeeName", this.payeeName);
        fd.append("amount", this.amount);
        fd.append("MOP", this.modeOfPaymentItem.name);
        fd.append("currency", this.currencyItem.name);
        fd.append("class", "RE");
        fd.append("form", "Reimbursement Request");
  
  
        
        
  
        fd.append("loggedUserId", this.loggedUserId);
        fd.append("loggedUserFirstName", this.loggedUserFirstName);
        fd.append("loggedUserLastName", this.loggedUserLastName);
        fd.append("loggedUserDepartment", this.loggedUserDepartment);
        fd.append("loggedUserPosition", this.loggedUserPosition);
        fd.append("companyId", this.companyId);
        fd.append("companyName", this.companyName);
  
        fd.append("expenseType_Data", JSON.stringify(this.expenseType_Data));
        fd.append("transpoSetup_Data", JSON.stringify(this.transpoSetup_Data));
  
        fd.append("idOfAttachmentsToDelete", JSON.stringify(this.idOfAttachmentsToDelete));
  
  
  
        try {
          const resp = await axios.post(
            "http://127.0.0.1:8000/api/saveRe",
            fd
          );
  
          if (resp.status >= 200 && resp.status <= 399) {
            this.isLoading = false;
            this.openToast("top-right", "success", resp.data.message);
            this.$router.replace("/inprogress");
          }
  
          console.log(resp.data);
        } catch (err) {
          // Handle Error Here
          console.error(err);
            this.isLoading = false;
            this.openToast(
              "top-right",
              "error",
              "Please Contact the administrator! and try again later"
            );
        }
  
  
  
  
  
  
  
  
  
  
        // axios
        //   .post("http://127.0.0.1:8000/api/saveRe", fd)
        //   .then((res) => {
        //     // handle success
        //     // console.log(res.data.message)
        //     this.isLoading = false;
  
        //     if (res.status === 200) {
        //       this.openToast("top-right", "success", res.data.message);
        //       this.$router.replace("/inprogress");
        //     }
  
        //     if (res.status === 202) {
        //       // console.log(res)
        //       this.openToast("top-right", "error", res.data.message);
        //     }
        //   })
        //   .catch((error) => {
        //     // handle error
        //     console.log(error.data);
        //     this.isLoading = false;
        //     this.openToast(
        //       "top-right",
        //       "error",
        //       "Please Contact the administrator! and try again later"
        //     );
        //   })
        //   .then(() => {
        //     // always executed
        //   });
      },
  
      insert_transpoSetup() {
        this.attemptTdSubmit = true;
        const validated = this.validate_Transpo();
        this.resetAlert();
  
        if (validated) {
          const addData = {
            id: this.i++,
            CLIENT_NAME: this.itemclientName.name,
            DESTINATION_FRM: this.transpoSetup_From,
            DESTINATION_TO: this.transpoSetup_to,
            DESCRIPTION: this.transpoSetup_Remarks,
            AMT_SPENT: this.transpoSetup_Amount,
            MOT: this.itemtranspoSetup.name,
            CLIENT_ID: this.itemclientName.code,
            date_: this.transpoSetup_Date,
          };
          this.transpoSetup_Data.push(addData);
          this.clear_expenseType();
          this.clear_transpo();
          this.attemptTdSubmit = false;
          this.addAlert("Success", "Expense details added successfully!", "true");
        } else {
          this.addAlert("Failed", "Please complete required fields!", "false");
        }
  
        // console.log(this.transpoSetup_Data);
      },
  
      update_transpoSetup() {
        this.attemptTdSubmit = true;
        const validated = this.validate_Transpo();
        this.resetAlert();
  
        if (validated) {
          const addData = {
            id: this.transpoSetup_Data.id,
            CLIENT_NAME: this.itemclientName.name,
            DESTINATION_FRM: this.transpoSetup_From,
            DESTINATION_TO: this.transpoSetup_to,
            DESCRIPTION: this.transpoSetup_Remarks,
            AMT_SPENT: this.transpoSetup_Amount,
            MOT: this.itemtranspoSetup.name,
            CLIENT_ID: this.itemclientName.code,
            date_: this.transpoSetup_Date,
          };
  
          this.transpoSetup_Data.splice(this.setIndex, 1);
          this.transpoSetup_Data.push(addData);
          this.transpoSetup_EditData = "";
  
          this.transpoSetup_Data.sort(function (a, b) {
            return a.id - b.id;
          });
          this.clear_expenseType();
          this.clear_transpo();
          this.attemptTdSubmit = false;
          this.addAlert(
            "Success",
            "Transportation details added successfully!",
            "true"
          );
        } else {
          this.addAlert("Failed", "Please complete required fields!", "false");
        }
      },
  
      edit_transpoSetup(index) {
        this.isButton = false;
        const transpoSetup_Data = this.transpoSetup_Data[index];
        this.transpoSetup_EditData = transpoSetup_Data;
        this.setIndex = index;
  
        console.log(transpoSetup_Data);
  
        this.itemclientName = {
          code: transpoSetup_Data.CLIENT_ID,
          name: transpoSetup_Data.CLIENT_NAME,
        };
  
        this.itemtranspoSetup = {
          code: transpoSetup_Data.MOT,
          name: transpoSetup_Data.MOT,
        };
  
        this.transpoSetup_Amount = transpoSetup_Data.AMT_SPENT;
        this.transpoSetup_From = transpoSetup_Data.DESTINATION_FRM;
        this.transpoSetup_to = transpoSetup_Data.DESTINATION_TO;
        this.transpoSetup_Remarks = transpoSetup_Data.DESCRIPTION;
        this.transpoSetup_Date = transpoSetup_Data.date_;
  
        // console.log(index)
      },
  
      trash_transpoSetup(index) {
        this.transpoSetup_Data.splice(index, 1);
        // console.log(index)
      },
  
      validate_expenseType() {
        if (
          !this.missingXPDateNeeded &&
          !this.missingXPClientItem &&
          !this.missingXPAmount &&
          !this.missingXPType &&
          !this.missingXPRemarks
        ) {
          return true;
        } else {
          return false;
        }
      },
  
      validate_Transpo() {
        if (
          !this.missingTDDateNeeded &&
          !this.missingTDClientItem &&
          !this.missingTDMot &&
          !this.missingTDAmount &&
          !this.missingTDFrom &&
          !this.missingTDTo &&
          !this.missingTDRemarks
        ) {
          return true;
        } else {
          return false;
        }
      },
  
      clear_expenseType() {
        this.expenseType_Date = null;
        this.itemclientName = {};
        this.expenseType_Amount = "";
        this.itemmodalExpenseType = {};
        this.expenseType_RealAmount = "";
        this.expenseType_Remarks = "";
      },
  
      clear_transpo() {
        this.transpoSetup_Date = null;
        this.itemclientName = {};
        this.itemtranspoSetup = {};
        this.transpoSetup_Amount = "";
        this.transpoSetup_RealAmount = "";
        this.transpoSetup_From = "";
        this.transpoSetup_to = "";
        this.transpoSetup_Remarks = "";
      },
  
      insert_ExpenseType() {
        // when close false
        this.attemptXpSubmit = true;
        const validated = this.validate_expenseType();
        this.resetAlert();
  
        if (validated) {
          const addData = {
            id: this.i++,
            CLIENT_NAME: this.itemclientName.name,
            DESCRIPTION: this.expenseType_Remarks,
            AMOUNT: this.expenseType_Amount,
            CLIENT_ID: this.itemclientName.code,
            EXPENSE_TYPE: this.itemmodalExpenseType.name,
            date_: this.expenseType_Date,
          };
          this.expenseType_Data.push(addData);
          this.clear_expenseType();
          this.attemptXpSubmit = false;
  
          this.addAlert("Success", "Expense details added successfully!", "true");
        } else {
          this.addAlert("Failed", "Please complete required fields!", "false");
        }
      },
  
      update_ExpenseType() {
        // when close false
        this.attemptXpSubmit = true;
        const validated = this.validate_expenseType();
        this.resetAlert();
  
        if (validated) {
          const addData = {
            id: this.expenseType_EditData.id,
            CLIENT_NAME: this.itemclientName.name,
            DESCRIPTION: this.expenseType_Remarks,
            AMOUNT: this.expenseType_Amount,
            CLIENT_ID: this.itemclientName.code,
            EXPENSE_TYPE: this.itemmodalExpenseType.name,
            date_: this.expenseType_Date,
          };
  
          this.expenseType_Data.push(addData);
          this.expenseType_EditData = "";
          this.expenseType_Data.splice(this.setIndex, 1);
  
          // this.liquidation.push(this.editliquidation)
          this.expenseType_Data.sort(function (a, b) {
            return a.id - b.id;
          });
          this.clear_expenseType();
          this.attemptXpSubmit = false;
  
          this.addAlert("Success", "Expense details added successfully!", "true");
        } else {
          this.addAlert("Failed", "Please complete required fields!", "false");
        }
      },
  
      edit_ExpenseType(index) {
        this.isButton = false;
        const expenseType_Data = this.expenseType_Data[index];
        this.expenseType_EditData = expenseType_Data;
        this.setIndex = index;
  
        this.itemclientName = {
          code: expenseType_Data.CLIENT_ID,
          name: expenseType_Data.CLIENT_NAME,
        };
        this.itemmodalExpenseType = {
          code: expenseType_Data.EXPENSE_TYPE,
          name: expenseType_Data.EXPENSE_TYPE,
        };
  
        this.expenseType_Date = expenseType_Data.date_;
        this.expenseType_Amount = expenseType_Data.AMOUNT;
        this.expenseType_Remarks = expenseType_Data.DESCRIPTION;
      },
      trash_ExpenseType(index) {
        // console.log('1'+ index)
        this.expenseType_Data.splice(index, 1);
      },
  
      // Request Details
      todaysDate() {
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();
  
        if (mm < 10) {
          mm = `0${mm}`;
        }
  
        if (dd < 10) {
          dd = `0${dd}`;
        }
  
        const todaysDate = yyyy + "-" + mm + "-" + dd;
        this.requestDate = todaysDate;
      },
  
      async gettranspoSetup() {
        const response = await fetch(
          "http://127.0.0.1:8000/api/get-transpoSetup",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
  
        // console.log(responseData);
        if (!response.ok) {
          const error = new Error(
            responseData.message || "Failed to fetch modal ExpenseType Type."
          );
          throw error;
        }
        const transpoSetup = [];
        for (const key in responseData[0]) {
          // console.log(key)
          const request = {
            code: responseData[0][key].MODE,
            name: responseData[0][key].MODE,
          };
          transpoSetup.push(request);
        }
        this.transpoSetup = transpoSetup;
        // console.log(responseData[0].businessNumber)
      },
  
      async getexpenseType() {
        const response = await fetch(
          "http://127.0.0.1:8000/api/get-expenseType",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
  
        // console.log(responseData);
        if (!response.ok) {
          const error = new Error(
            responseData.message || "Failed to fetch modal ExpenseType Type."
          );
          throw error;
        }
        const modalExpenseType = [];
        for (const key in responseData[0]) {
          // console.log(key)
          const request = {
            code: responseData[0][key].type,
            name: responseData[0][key].type,
          };
          modalExpenseType.push(request);
        }
        this.modalExpenseType = modalExpenseType;
        // console.log(responseData[0].businessNumber)
      },
  
      async getBusinesses() {
        const response = await fetch(
          "http://127.0.0.1:8000/api/general-businesses/1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        // console.log(responseData)
        if (!response.ok) {
          const error = new Error(
            responseData.message || "Failed to fetch Businesses."
          );
          throw error;
        }
        const client = [];
        for (const key in responseData) {
          // console.log(key)
          const request = {
            code: responseData[key].businessNumber,
            name: responseData[key].businessName,
          };
          client.push(request);
        }
        this.modalclient = client;
  
  
      },
  
      async getProjects() {
        const response = await fetch(
          "http://127.0.0.1:8000/api/general-projects",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        if (!response.ok) {
          const error = new Error(
            responseData.message || "Failed to fetch Projects."
          );
          throw error;
        }
        const project = [];
        for (const key in responseData) {
          const request = {
            code: responseData[key].project_id,
            name: responseData[key].project_name,
          };
          project.push(request);
        }
        this.project = project;
      },
  
      async getClient(id) {
        const response = await fetch(
          `http://127.0.0.1:8000/api/business-client/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        if (!response.ok) {
          const error = new Error(
            responseData.message || "Failed to fetch Reporting Manager."
          );
          throw error;
        }
        const client = [];
        for (const key in responseData) {
          const request = {
            clientId: responseData[key].clientID,
            clientName: responseData[key].clientName,
            mainId: responseData[key].mainID,
          };
          client.push(request);
        }
        this.clientName = client[0].clientName;
        this.clientId = client[0].clientId;
        this.mainId = client[0].mainId;
      },
  
      async getReportingManager() {
        const response = await fetch(
          `http://127.0.0.1:8000/api/reporting-manager/${this.loggedUserId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
  
        const responseData = await response.json();
        if (!response.ok) {
          const error = new Error(
            responseData.message || "Failed to fetch Reporting Manager."
          );
          throw error;
        }
  
        const reportingManager = [];
        for (const key in responseData) {
          const request = {
            code: responseData[key].RMID,
            name: responseData[key].RMName,
          };
          reportingManager.push(request);
        }
        this.reportingManager = reportingManager;
        // console.log(this.reportingManager);
      },
  
      // The Attachments
      onFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.selectedFile.push(selectedFiles[i]);
        }
        this.filePreview();
  
        console.log(this.selectedFile);
      },
      onInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.selectedFile.push(selectedFiles[i]);
        }
        this.filePreview();
      },
      remove(i) {
        this.selectedFile.splice(i, 1);
        this.filePreview();
      },
      preview(i) {
        // console.log(i)
        const url = this.filespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
  
      dragover(event) {
        event.preventDefault();
        // Add some visual fluff to show the user can drop its files
        if (!event.currentTarget.classList.contains("bg-white")) {
          event.currentTarget.classList.remove("bg-light");
          event.currentTarget.classList.add("bg-white");
        }
      },
      dragleave(event) {
        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      drop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually
  
        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
  
      filePreview() {
        let files = this.selectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.filespreview = fileContainer;
      },
  
      // Amount aldrin script
  
      formatNumber(n) {
        // format number 1000000 to 1,234,567
        return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
  
      formatCurrency(input, blur) {
        // appends $ to value, validates decimal side
        // and puts cursor back in right position.
  
        // get input value
        let input_val = this.amount;
  
        // don't validate empty input
        if (input_val === "") {
          return;
        }
  
        // original length
        let original_len = input_val.length;
  
        // initial caret position
        let caret_pos = input.target.selectionStart;
  
        // check for decimal
        if (input_val.indexOf(".") >= 0) {
          // get position of first decimal
          // this prevents multiple decimals from
          // being entered
          let decimal_pos = input_val.indexOf(".");
  
          // split number by decimal point
          let left_side = input_val.substring(0, decimal_pos);
          let right_side = input_val.substring(decimal_pos);
  
          // add commas to left side of number
          left_side = this.formatNumber(left_side);
  
          // validate right side
          right_side = this.formatNumber(right_side);
  
          // On blur make sure 2 numbers after decimal
          if (blur === "blur") {
            right_side += "00";
          }
  
          // Limit decimal to only 2 digits
          right_side = right_side.substring(0, 2);
  
          // join number by .
          input_val = left_side + "." + right_side;
        } else {
          // no decimal entered
          // add commas to number
          // remove all non-digits
          input_val = this.formatNumber(input_val);
          // input_val = input_val;
  
          // final formatting
          if (blur === "blur") {
            input_val += ".00";
          }
        }
  
        // send updated string to input
        this.amount = input_val;
        input.target.value = input_val;
  
        let realAmount = input_val;
        if (realAmount.indexOf(",") !== -1) {
          realAmount = realAmount.replace(/,/g, "");
        }
        this.realAmount = realAmount;
        console.log(this.realAmount);
  
        // put caret back in the right position
        let updated_len = input_val.length;
        caret_pos = updated_len - original_len + caret_pos;
        input.target.setSelectionRange(caret_pos, caret_pos);
      },
  
      formatCurrencyExpense(input, blur) {
        // appends $ to value, validates decimal side
        // and puts cursor back in right position.
  
        // get input value
        let input_val = this.expenseType_Amount;
  
        // don't validate empty input
        if (input_val === "") {
          return;
        }
  
        // original length
        let original_len = input_val.length;
  
        // initial caret position
        let caret_pos = input.target.selectionStart;
  
        // check for decimal
        if (input_val.indexOf(".") >= 0) {
          // get position of first decimal
          // this prevents multiple decimals from
          // being entered
          let decimal_pos = input_val.indexOf(".");
  
          // split number by decimal point
          let left_side = input_val.substring(0, decimal_pos);
          let right_side = input_val.substring(decimal_pos);
  
          // add commas to left side of number
          left_side = this.formatNumber(left_side);
  
          // validate right side
          right_side = this.formatNumber(right_side);
  
          // On blur make sure 2 numbers after decimal
          if (blur === "blur") {
            right_side += "00";
          }
  
          // Limit decimal to only 2 digits
          right_side = right_side.substring(0, 2);
  
          // join number by .
          input_val = left_side + "." + right_side;
        } else {
          // no decimal entered
          // add commas to number
          // remove all non-digits
          input_val = this.formatNumber(input_val);
          // input_val = input_val;
  
          // final formatting
          if (blur === "blur") {
            input_val += ".00";
          }
        }
  
        // send updated string to input
        this.expenseType_Amount = input_val;
        input.target.value = input_val;
  
        let realAmount = input_val;
        if (realAmount.indexOf(",") !== -1) {
          realAmount = realAmount.replace(/,/g, "");
        }
        this.expenseType_RealAmount = realAmount;
        console.log(this.expenseType_RealAmount);
  
        // put caret back in the right position
        let updated_len = input_val.length;
        caret_pos = updated_len - original_len + caret_pos;
        input.target.setSelectionRange(caret_pos, caret_pos);
      },
  
      formatCurrencyTranspo(input, blur) {
        // appends $ to value, validates decimal side
        // and puts cursor back in right position.
  
        // get input value
        let input_val = this.transpoSetup_Amount;
  
        // don't validate empty input
        if (input_val === "") {
          return;
        }
  
        // original length
        let original_len = input_val.length;
  
        // initial caret position
        let caret_pos = input.target.selectionStart;
  
        // check for decimal
        if (input_val.indexOf(".") >= 0) {
          // get position of first decimal
          // this prevents multiple decimals from
          // being entered
          let decimal_pos = input_val.indexOf(".");
  
          // split number by decimal point
          let left_side = input_val.substring(0, decimal_pos);
          let right_side = input_val.substring(decimal_pos);
  
          // add commas to left side of number
          left_side = this.formatNumber(left_side);
  
          // validate right side
          right_side = this.formatNumber(right_side);
  
          // On blur make sure 2 numbers after decimal
          if (blur === "blur") {
            right_side += "00";
          }
  
          // Limit decimal to only 2 digits
          right_side = right_side.substring(0, 2);
  
          // join number by .
          input_val = left_side + "." + right_side;
        } else {
          // no decimal entered
          // add commas to number
          // remove all non-digits
          input_val = this.formatNumber(input_val);
          // input_val = input_val;
  
          // final formatting
          if (blur === "blur") {
            input_val += ".00";
          }
        }
  
        // send updated string to input
        this.transpoSetup_Amount = input_val;
        input.target.value = input_val;
  
        let realAmount = input_val;
        if (realAmount.indexOf(",") !== -1) {
          realAmount = realAmount.replace(/,/g, "");
        }
        this.transpoSetup_RealAmount = realAmount;
        // console.log(this.transpoSetup_RealAmount);
  
        // put caret back in the right position
        let updated_len = input_val.length;
        caret_pos = updated_len - original_len + caret_pos;
        input.target.setSelectionRange(caret_pos, caret_pos);
      },
    },
  };
  </script>
  
  <style scoped>
  .progressBarWrapper {
    margin: 20px 0px;
  }
  .progressbar {
    display: table-row;
    width: 100%;
    line-height: 5px;
    background-color: lightgrey;
  }
  
  .progressbar.active {
    background-color: #3c8dbc;
  }
  
  .progressbar span {
    background-color: lightgrey;
    padding: 10px 16px;
    color: white;
    border-radius: 100%;
  }
  
  .progressbar span.active {
    background-color: #3c8dbc;
  }
  
  .textbar {
    display: table-row;
    width: 100%;
    line-height: 5px;
  }
  
  .textbar span {
    color: lightgray;
  }
  
  .textbar span.active {
    color: black;
  }
  
  #assetsFieldHandle {
    opacity: 0;
    position: absolute;
    overflow: hidden;
  }
  
  #uploadText {
    cursor: pointer;
  }
  
  .uploadContainer {
    background-color: #f8f9f9;
    border-width: 5px;
    border-style: dashed;
    border-color: #99badd;
  
    /* opacity: 1; */
  }
  
  [v-cloak] {
    display: none;
  }
  
  .ulUpload {
    list-style: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
  .px-13 {
    padding-left: 13px;
    padding-right: 13px;
  }
  </style>
  