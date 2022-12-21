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
                    <td>{{ item.prefix_name }}</td>
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
                          @click="editCorporateOfficers(businessData.indexOf(item))"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          class="btn btn-sm btn-danger m-0 ml-1"
                          @click="trashCorporateOfficers(businessData.indexOf(item))"
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
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
  
              <tbody style="font-size: 14px">
                <tr v-for="(item, index) in addressData" :key="item.ID">
                  <td class="text-center">{{ index + 1 }}.</td>
                  <td>{{ item.TypeOfAddress }}</td>
                  <td>{{ item.address_line }}</td>
                  <td>{{ item.city }}</td>
                  <td>{{ item.PhoneNum }}</td>
                  <td>{{ item.EmailAdd }}</td>
                  <td>{{ item.Fax }}</td>
                  <td>{{ item.Status }}</td>
                  <td class="pl-0 m-0">
                    <aside class="d-flex justify-content-center">
                      <button
                        class="btn btn-sm btn-info m-0"
                        data-toggle="modal"
                        data-target="#modal-address"
                        @click="editAddress(addressData.indexOf(item))"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                      <button
                        class="btn btn-sm btn-danger m-0 ml-1"
                        @click="trashAddress(addressData.indexOf(item), item.ID)"
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
                    v-model="purchasing.productLine"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="reference">Services</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="purchasing.services"
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
                    v-model="purchasing.contactDetails"
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
                    v-model="purchasing.ordering"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Delivery/Shipping Preferences</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="purchasing.shipping"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Documentation Preferences</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="purchasing.documentation"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <small><label for="reference">Payment Preferences</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="purchasing.payment"
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
                    @drop="purchasingFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="purchasingFileOnFileSelected"
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
                        v-for="file in purchasingSelectedFile"
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
                                @click="purchasingFileRemove(purchasingSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="purchasingFilePreview(purchasingSelectedFile.indexOf(file))"
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
                    v-model.trim="purchasing.notes"
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
              <div class="col-md-6">
                <div class="form-group">
                  <small
                    ><label for="reportingManager selextForm" id="selextForm"
                      >Bank</label
                    ></small
                  >
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="accounting.bank"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <small><label for="reference">Branch</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="accounting.branch"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <small><label for="reference">Contact Person</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="accounting.contactPerson"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <small><label for="reference">Telephone Number</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    v-model="accounting.telephoneNumber"
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
                  <tr v-for="(item, index) in accountingData" :key="item.id">
                    <td class="text-center">{{ index + 1 }}.</td>
                    <td>{{ item.bankName }}</td>
                    <td>{{ item.bankAcctNumber }}</td>
                    <td>{{ item.bankBranch }}</td>
                    <td>{{ item.bank_currency_name }}</td>
                    <td>{{ item.bankSwiftCode }}</td>
                    <td>{{ item.bankPreferred }}</td>
                    <td>checkbox here</td>
                    <td class="pl-0 m-0">
                      <aside class="d-flex justify-content-center">
                        <button
                          class="btn btn-sm btn-info m-0"
                          data-toggle="modal"
                          data-target="#modal-banking-info"
                          @click="editBankInfo(accountingData.indexOf(item))"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          class="btn btn-sm btn-danger m-0 ml-1"
                          @click="trashBankInfo(accountingData.indexOf(item))"
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
                    v-model.trim="technical.warrantyNote"
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
                    v-model.trim="technical.policyNote"
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
                    @drop="technicalFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle"
                      class="w-25 h-25 overflow-hidden"
                      @change="technicalFileOnFileSelected"
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
                        v-for="file in technicalSelectedFile"
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
                                @click="technicalFileRemove(technicalSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="technicalFilePreview(technicalSelectedFile.indexOf(file))"
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
                    v-model.trim="technical.attachmentNote"
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
                <tr v-for="(item, index) in relatedVendorData" :key="item.id">
                  <td class="text-center">{{ index + 1 }}.</td>
                  <td>{{ item.vendor_relationship_name }}</td>
                  <td>{{ item.vendor_code }}</td>
                  <td>{{ item.vendor_name }}</td>
                  <td class="pl-0 m-0">
                    <aside class="d-flex justify-content-center">
                      <button
                        class="btn btn-sm btn-info m-0"
                        data-toggle="modal"
                        data-target="#modal-related-vendor"
                        @click="editRelatedVendor(relatedVendorData.indexOf(item))"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                      <button
                        class="btn btn-sm btn-danger m-0 ml-1"
                        @click="trashRelatedVendor(relatedVendorData.indexOf(item))"
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
                <tr v-for="(item, index) in relatedCustomerData" :key="item.id">
                  <td class="text-center">{{ index + 1 }}.</td>
                  <td>{{ item.customer_relationship_name }}</td>
                  <td>{{ item.customer_code }}</td>
                  <td>{{ item.customer_name }}</td>
                  <td class="pl-0 m-0">
                    <aside class="d-flex justify-content-center">
                      <button
                        class="btn btn-sm btn-info m-0"
                        data-toggle="modal"
                        data-target="#modal-related-customer"
                        @click="editRelatedCustomer(relatedCustomerData.indexOf(item))"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                      <button
                        class="btn btn-sm btn-danger m-0 ml-1"
                        @click="trashRelatedCustomer(relatedCustomerData.indexOf(item))"
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

          <!-- Attachments  -->
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
                    @drop="attachmentOneFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle1"
                      class="w-25 h-25 overflow-hidden"
                      @change="attachmentOneFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle1"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in attachmentOneSelectedFile"
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
                                @click="attachmentOneFileRemove(attachmentOneSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="attachmentOneFilePreview(attachmentOneSelectedFile.indexOf(file))"
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
                    @drop="attachmentTwoFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle2"
                      class="w-25 h-25 overflow-hidden"
                      @change="attachmentTwoFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle2"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in attachmentTwoSelectedFile"
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
                                @click="attachmentTwoFileRemove(attachmentTwoSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="attachmentTwoFilePreview(attachmentTwoSelectedFile.indexOf(file))"
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
                    @drop="attachmentThreeFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle3"
                      class="w-25 h-25 overflow-hidden"
                      @change="attachmentThreeFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle3"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in attachmentThreeSelectedFile"
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
                                @click="attachmentThreeFileRemove(attachmentThreeSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="attachmentThreeFilePreview(attachmentThreeSelectedFile.indexOf(file))"
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
                    @drop="attachmentFourFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle4"
                      class="w-25 h-25 overflow-hidden"
                      @change="attachmentFourFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle4"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in attachmentFourSelectedFile"
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
                                @click="attachmentFourFileRemove(attachmentFourSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="attachmentFourFilePreview(attachmentFourSelectedFile.indexOf(file))"
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
                    @drop="attachmentFiveFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle5"
                      class="w-25 h-25 overflow-hidden"
                      @change="attachmentFiveFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle5"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in attachmentFiveSelectedFile"
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
                                @click="attachmentFiveFileRemove(attachmentFiveSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="attachmentFiveFilePreview(attachmentFiveSelectedFile.indexOf(file))"
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
                    @drop="attachmentSixFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle6"
                      class="w-25 h-25 overflow-hidden"
                      @change="attachmentSixFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle6"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in attachmentSixSelectedFile"
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
                                @click="attachmentSixFileRemove(attachmentSixSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="attachmentSixFilePreview(attachmentSixSelectedFile.indexOf(file))"
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
                    @drop="attachmentSevenFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle7"
                      class="w-25 h-25 overflow-hidden"
                      @change="attachmentSevenFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle7"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in attachmentSevenSelectedFile"
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
                                @click="attachmentSevenFileRemove(attachmentSevenSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="attachmentSevenFilePreview(attachmentSevenSelectedFile.indexOf(file))"
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
                          data-target="#modal-distribution-agreement"
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
                  <tr v-for="(item, index) in distributionAgreementData" :key="item.id">
                    <td class="text-center">{{ index + 1 }}.</td>
                    <td>{{ item.monthStart }}</td>
                    <td>{{ item.monthEnd }}</td>
                    <td>{{ item.annualTarget }}</td>
                    <td>{{ item.currency_name }}</td>
                    <td>{{ item.totalOrder }}</td>
                    <td class="pl-0 m-0">
                      <aside class="d-flex justify-content-center">
                        <button
                          class="btn btn-sm btn-info m-0"
                          data-toggle="modal"
                          data-target="#modal-distribution-agreement"
                          @click="editDistributionAgreement(distributionAgreementData.indexOf(item))"
                        >
                          <i class="fas fa-edit"></i>
                        </button>
                        <button
                          class="btn btn-sm btn-danger m-0 ml-1"
                          @click="trashDistributionAgreement(distributionAgreementData.indexOf(item))"
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
                    @drop="distributionOneFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle1"
                      class="w-25 h-25 overflow-hidden"
                      @change="distributionOneFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle1"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in distributionOneSelectedFile"
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
                                @click="distributionOneFileRemove(distributionOneSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="distributionOneFilePreview(distributionOneSelectedFile.indexOf(file))"
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
                    @drop="distributionTwoFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle2"
                      class="w-25 h-25 overflow-hidden"
                      @change="distributionTwoFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle2"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in distributionTwoSelectedFile"
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
                                @click="distributionTwoFileRemove(distributionTwoSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="distributionTwoFilePreview(distributionTwoSelectedFile.indexOf(file))"
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
                    @drop="distributionThreeFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle3"
                      class="w-25 h-25 overflow-hidden"
                      @change="distributionThreeFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle3"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in distributionThreeSelectedFile"
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
                                @click="distributionThreeFileRemove(distributionThreeSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="distributionThreeFilePreview(distributionThreeSelectedFile.indexOf(file))"
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
                    @drop="distributionFourFileDrop"
                  >
                    <input
                      type="file"
                      multiple
                      name="fields[assetsFieldHandle][]"
                      id="assetsFieldHandle4"
                      class="w-25 h-25 overflow-hidden"
                      @change="distributionFourFileOnFileSelected"
                      ref="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
        
                    <label
                      for="assetsFieldHandle4"
                      style="width: 100%; cursor: pointer"
                      class="block pt-3 cursor-pointer"
                    >
                      <span class="text-secondary">Click here or drop file(s)</span>
                    </label>
      
                    <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                      <li
                        class="text-sm mt-2"
                        v-for="file in distributionFourSelectedFile"
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
                                @click="distributionFourFileRemove(distributionFourSelectedFile.indexOf(file))"
                                title="Remove file"
                              >
                                Remove
                              </button>
                            </div>
                            <div class="ml-1">
                              <button
                                @click="distributionFourFilePreview(distributionFourSelectedFile.indexOf(file))"
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
                    v-model.trim="distribution.notes"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <!-- Distribution and Agreement -->
  
          <!--  Form Review -->
          <aside v-else-if="(this.counter === 9)">
            <!-- General Review -->
            <div class="card card-secondary mt-4">
              <div class="card-header">
                <h3 class="card-title">General</h3>
  
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
                      <td>Website</td>
                      <td style="width: 80%">{{ general.website }}</td>
                    </tr>
                    <tr>
                      <td>Vendor Type</td>
                      <td>{{ general.vendorTypeSelected }}</td>
                    </tr>
                    <tr>
                      <td>In Business Since</td>
                      <td>{{ general.inBusinessSince }}</td>
                    </tr>
                    <tr>
                      <td>Payment Terms</td>
                      <td>{{ paymentTermsSelected.name }}</td>
                    </tr>
                    <tr>
                      <td>Credit Limit</td>
                      <td>{{ general.creditLimit }}</td>
                    </tr>
                    <tr>
                      <td>Currency</td>
                      <td>{{ currenciesSelected.name }}</td>
                    </tr>
                    <tr>
                      <td>Last Update Date</td>
                      <td>{{ requestDate }}</td>
                    </tr>
                    <tr>
                      <td>Last Update By</td>
                      <td>{{ general.lastUpdateBy }}</td>
                    </tr>
                    <tr>
                      <td>VAT Status</td>
                      <td>{{ businessTaxStatusSelected.name }}</td>
                    </tr>
                    <tr>
                      <td>TIN Number</td>
                      <td>{{ general.tinNumber }}</td>
                    </tr>
                    <tr>
                      <td>2303#</td>
                      <td>{{ general.twentyThreeZeroThree }}</td>
                    </tr>
                    <tr>
                      <td>Sec#</td>
                      <td>{{ general.secNumber }}</td>
                    </tr>
                    <tr>
                      <td>Notes</td>
                      <td>{{ general.notes }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
              <!-- /.card -->
            </div>
            <!-- /.General Review -->

            <!-- Business Review -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Business</h3>
  
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
                      <td>Type of Business</td>
                      <td style="width: 80%">{{ businessTypeSelected.name }}</td>
                    </tr>
                    <tr>
                      <td>Nature of Business</td>
                      <td>{{ businessNatureSelected.name }}</td>
                    </tr>
                    <tr>
                      <td>Authorized Capital Stock</td>
                      <td>{{ business.authorizedCapitalStock }}</td>
                    </tr>
                    <tr>
                      <td>Paid-Up Capital Stock</td>
                      <td>{{ business.paidUpCapitalStock }}</td>
                    </tr>
                    <tr>
                      <td>Description of Line of Business</td>
                      <td>{{ business.notes }}</td>
                    </tr>
                  </tbody>
                </table>

                <table class="table table-sm mt-5 table-bordered table-striped">
                  <thead>
                    <tr>
                      <th colspan="7" scope="col">
                        <aside class="d-flex align-items-center">
                          <span class="mb-1">Corporate Officers</span>
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
                    </tr>
                  </thead>
      
                  <tbody style="font-size: 14px">
                    <tr v-for="(item, index) in businessData" :key="item.id">
                      <td class="text-center">{{ index + 1 }}.</td>
                      <td>{{ item.prefix_name }}</td>
                      <td>{{ item.firstName }}</td>
                      <td>{{ item.lastName }}</td>
                      <td>{{ item.suffix }}</td>
                      <td>{{ item.designation }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
            <!-- /.Business Review -->
  
            <!-- Contact and Address Review -->
            
            <!-- /.Contact and Address Review -->
  
            <!-- Purchasing Review -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Purchasing</h3>
  
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
                      <td>Brand</td>
                      <td style="width: 80%">{{ purchasing.brand }}</td>
                    </tr>
                    <tr>
                      <td>Product Line</td>
                      <td>{{ purchasing.productLine }}</td>
                    </tr>
                    <tr>
                      <td>Services</td>
                      <td>{{ purchasing.services }}</td>
                    </tr>
                    <tr>
                      <td>Contact Person</td>
                      <td>{{  }}</td>
                    </tr>
                    <tr>
                      <td>PO to be sent via</td>
                      <td>{{ poToBeSentSelected.name }}</td>
                    </tr>
                    <tr>
                      <td>Contact Details</td>
                      <td>{{ purchasing.contactDetails }}</td>
                    </tr>
                    <tr>
                      <td>Ordering Preferences</td>
                      <td>{{ purchasing.ordering }}</td>
                    </tr>
                    <tr>
                      <td>Delivery/Shipping Preferences</td>
                      <td>{{ purchasing.shipping }}</td>
                    </tr>
                    <tr>
                      <td>Documentation Preferences</td>
                      <td>{{ purchasing.documentation }}</td>
                    </tr>
                    <tr>
                      <td>Payment Preferences</td>
                      <td>{{ purchasing.payment }}</td>
                    </tr>
                    <tr>
                      <td>Attachment short notes</td>
                      <td>{{ purchasing.notes }}</td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">Attachments</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in purchasingSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="purchasingFileRemove(purchasingSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="purchasingFilePreview(purchasingSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.Purchasing Review -->
            
            <!-- Accounting Review -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Accounting</h3>
  
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
                      <td>ATC</td>
                      <td style="width: 80%">{{ AccountATCSelected.atc }}</td>
                    </tr>
                    <tr>
                      <td>Nature of Income Payment</td>
                      <td>{{ AccountDescSelected }}</td>
                    </tr>
                    <tr>
                      <td>Tax Rate</td>
                      <td>{{ AccountRateSelected }}</td>
                    </tr>
                    <tr>
                      <td>Bank</td>
                      <td>{{ accounting.bank }}</td>
                    </tr>
                    <tr>
                      <td>Branch</td>
                      <td>{{ accounting.branch }}</td>
                    </tr>
                    <tr>
                      <td>Contact Person</td>
                      <td>{{ accounting.contactPerson }}</td>
                    </tr>
                    <tr>
                      <td>Telephone Number</td>
                      <td>{{ accounting.telephoneNumber }}</td>
                    </tr>
                  </tbody>
                </table>

                <table class="table table-sm mt-5 table-bordered table-striped">
                  <thead>
                    <tr>
                      <th colspan="8" scope="col">
                        <aside class="d-flex align-items-center">
                          <span class="mb-1">Banking Information</span>
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
                    </tr>
                  </thead>
      
                  <tbody style="font-size: 14px">
                    <tr v-for="(item, index) in accountingData" :key="item.id">
                      <td class="text-center">{{ index + 1 }}.</td>
                      <td>{{ item.bankName }}</td>
                      <td>{{ item.bankAcctNumber }}</td>
                      <td>{{ item.bankBranch }}</td>
                      <td>{{ item.bank_currency_name }}</td>
                      <td>{{ item.bankSwiftCode }}</td>
                      <td>{{ item.bankPreferred }}</td>
                      <td>checkbox here</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.Accounting Review -->

            <!-- Technical and Support Review -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Technical and Support</h3>
  
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
                      <td>Warranty Information</td>
                      <td style="width: 80%">{{ technical.warrantyNote }}</td>
                    </tr>
                    <tr>
                      <td>RMA Policy and Note</td>
                      <td style="width: 80%">{{ technical.policyNote }}</td>
                    </tr>
                    <tr>
                      <td>Attachment Short Name</td>
                      <td style="width: 80%">{{ technical.attachmentNote }}</td>
                    </tr>
                    
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">Attachments</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in technicalSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="technicalFileRemove(technicalSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="technicalFilePreview(technicalSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.Technical and Support Review -->

            <!-- Related To Review -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Related To</h3>
  
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
                <table class="table table-sm table-bordered table-striped">
                  <thead>
                    <tr>
                      <th colspan="7" scope="col">
                        <aside class="d-flex align-items-center">
                          <span class="mb-1">Related Vendors</span>
                        </aside>
                      </th>
                    </tr>
                    <tr>
                      <th scope="col" class="text-center">#</th>
                      <th scope="col">Relationship</th>
                      <th scope="col">Vendor Code</th>
                      <th scope="col">Vendor Name</th>
                    </tr>
                  </thead>
      
                  <tbody style="font-size: 14px">
                    <tr v-for="(item, index) in relatedVendorData" :key="item.id">
                      <td class="text-center">{{ index + 1 }}.</td>
                      <td>{{ item.vendor_relationship_name }}</td>
                      <td>{{ item.vendor_code }}</td>
                      <td>{{ item.vendor_name }}</td>
                    </tr>
                  </tbody>
                </table>

                <table class="table table-sm mt-5 table-bordered table-striped">
                  <thead>
                    <tr>
                      <th colspan="7" scope="col">
                        <aside class="d-flex align-items-center">
                          <span class="mb-1">Related Customers</span>
                        </aside>
                      </th>
                    </tr>
                    <tr>
                      <th scope="col" class="text-center">#</th>
                      <th scope="col">Relationship</th>
                      <th scope="col">Customer Code</th>
                      <th scope="col">Customer Name</th>
                    </tr>
                  </thead>
      
                  <tbody style="font-size: 14px">
                    <tr v-for="(item, index) in relatedCustomerData" :key="item.id">
                      <td class="text-center">{{ index + 1 }}.</td>
                      <td>{{ item.customer_relationship_name }}</td>
                      <td>{{ item.customer_code }}</td>
                      <td>{{ item.customer_name }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.Related To Review -->
            
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
                <h5 class="mt-2 ml-3 font-weight-bold">Accomplished Vendor Information Sheet</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in attachmentOneSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="attachmentOneFileRemove(attachmentOneSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="attachmentOneFilePreview(attachmentOneSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">Business Registration</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in attachmentTwoSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="attachmentTwoFileRemove(attachmentTwoSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="attachmentTwoFilePreview(attachmentTwoSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">Updated Business Permit</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in attachmentThreeSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="attachmentThreeFileRemove(attachmentThreeSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="attachmentThreeFilePreview(attachmentThreeSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">BIR Certificate of Registration: BIR 2303 form</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in attachmentFourSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="attachmentFourFileRemove(attachmentFourSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="attachmentFourFilePreview(attachmentFourSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">Sample of Delivery Receipt, Sales Invoice, Official Receipt</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in attachmentFiveSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="attachmentFiveFileRemove(attachmentFiveSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="attachmentFiveFilePreview(attachmentFiveSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">Company/Business Profile</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in attachmentSixSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="attachmentSixFileRemove(attachmentSixSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="attachmentSixFilePreview(attachmentSixSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">Latest Audited Financial Statements</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in attachmentSevenSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="attachmentSevenFileRemove(attachmentSevenSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="attachmentSevenFilePreview(attachmentSevenSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- ./Attachments Review -->

            <!-- Distribution and Agreement Review -->
            <div class="card card-secondary">
              <div class="card-header">
                <h3 class="card-title">Distribution and Agreement</h3>
  
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
                <table class="table table-sm table-bordered table-striped">
                  <thead>
                    <tr>
                      <th colspan="6" scope="col">
                        <aside class="d-flex align-items-center">
                          <span class="mb-1">Sales Target</span>
                        </aside>
                      </th>
                    </tr>
                    <tr>
                      <th scope="col" class="text-center">#</th>
                      <th scope="col">Month Start</th>
                      <th scope="col">Month End</th>
                      <th scope="col">Annual Target</th>
                      <th scope="col">Currency</th>
                      <th scope="col">Total Order</th>
                    </tr>
                  </thead>
      
                  <tbody style="font-size: 14px">
                    <tr v-for="(item, index) in distributionAgreementData" :key="item.id">
                      <td class="text-center">{{ index + 1 }}.</td>
                      <td>{{ item.monthStart }}</td>
                      <td>{{ item.monthEnd }}</td>
                      <td>{{ item.annualTarget }}</td>
                      <td>{{ item.currency_name }}</td>
                      <td>{{ item.totalOrder }}</td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">Agreement</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in distributionOneSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="distributionOneFileRemove(distributionOneSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="distributionOneFilePreview(distributionOneSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">NDA</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in distributionTwoSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="distributionTwoFileRemove(distributionTwoSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="distributionTwoFilePreview(distributionTwoSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">Distributor Certificate</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in distributionThreeSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="distributionThreeFileRemove(distributionThreeSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="distributionThreeFilePreview(distributionThreeSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h5 class="mt-5 ml-3 font-weight-bold">Other Attachments</h5>
                <table
                  class="table table-sm table-bordered table-hover table-striped"
                >
                  <thead>
                    <tr>
                      <th style="width: 20%">Filename</th>
                      <th style="width: 20%">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="file in distributionFourSelectedFile" :key="file.filename">
                      <td>{{ file.name }}</td>
                      <td class="pl-2 pr-2 text-center d-flex justify-content-center align-items-center">
                        <a class="btn btn-danger btn-sm px-13" @click="distributionFourFileRemove(distributionFourSelectedFile.indexOf(file))">Remove</a>
                        <a class="btn btn-secondary btn-sm ml-1"  @click="distributionFourFilePreview(distributionFourSelectedFile.indexOf(file))">Preview</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table
                  class="table table-sm mt-5 table-bordered table-hover table-striped"
                >
                  <tbody>
                    <tr>
                      <td>Attachment Short Name</td>
                      <td style="width: 80%">{{ distribution.notes }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.Distribution and Agreement Review -->
          </aside>
          <!-- / Form Review -->
  
          <!-- Modal Corporate Officer -->
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
                    @click="updateCorporateOfficers()"
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
                          option-value="name"
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
                          v-model="address.shortName"
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
                          v-model="address.line1"
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
                          v-model="address.line2"
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
                          v-model="address.city"
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
                          v-model="address.province"
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
                          v-model="address.zipcode"
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
                          option-value="name"
                          option-text="name"
                          placeholder="select item"
                          style="padding: 9px"
                        >
                        </model-list-select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <!-- <div class="col-md-6">
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
                    </div> -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Phone No.</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="address.phoneNumber"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Business Hours</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="address.businessHours"
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
                          v-model="address.email"
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
                          v-model="address.fax"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="billingAddressCheckbox" v-model="address.preferredBilling">
                        <label class="form-check-label" for="billingAddressCheckbox">
                          Preferred Billing Address
                        </label>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="billingShippingCheckbox" v-model="address.preferredShipping">
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
                          v-model.trim="address.notes"
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
                    @click="insertAddress()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="updateAddress()"
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
                          :list="prefixesList"
                          v-model="contactPrefixesSelected"
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
                          v-model="contact.firstName"
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
                          v-model="contact.lastName"
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
                          v-model="contact.suffix"
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
                          v-model="contact.nickName"
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
                          v-model="contact.designation"
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
                          v-model="contact.department"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Work From</label></small
                        >
                        <model-list-select
                          :list="addressWorkFromList"
                          v-model="addressWorkFromSelected"
                          option-value="name"
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
                          v-model="contact.mobileNumber"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-check" style="margin-top: 2.3rem;">
                          <input class="form-check-input" type="checkbox" value="" id="mobileNumberSubscribedCheckbox" v-model="contact.mobileNumberCheckbox">
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
                          v-model="contact.email"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-check" style="margin-top: 2.3rem;">
                          <input class="form-check-input" type="checkbox" value="" id="emailAddressSubscribedCheckbox" v-model="contact.emailCheckbox">
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
                          v-model.trim="contact.notes"
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
                    @click="insertContact()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="updateContact()"
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
                          v-model="accounting.bankName"
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
                          v-model="accounting.bankAcctNumber"
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
                          v-model="accounting.bankBranch"
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
                          v-model="AccountCurrenciesSelected"
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
                          v-model="accounting.bankSwiftCode"
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
                          v-model="accounting.bankPreferred"
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
                    @click="insertBankInfo()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="updateBankInfo()"
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
                          v-model="vendorRelationshipSelected"
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
                    @click="insertRelatedVendor()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="updateRelatedVendor()"
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
                          v-model="customerRelationshipSelected"
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
                    @click="insertRelatedCustomer()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="updateRelatedCustomer()"
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

          <!-- Modal Distribution and Agreement -->
          <div
            class="modal fade"
            id="modal-distribution-agreement"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title">
                    <b>Distribution and Agreement</b>
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
                          ><label for="projectName">Month Start</label></small
                        >
                        <date-picker
                          valueType="format"
                          style="display: block; width: 100%; line-height: 20px"
                          v-model="distribution.monthStart"
                        ></date-picker>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Month End</label></small
                        >
                        <date-picker
                          valueType="format"
                          style="display: block; width: 100%; line-height: 20px"
                          v-model="distribution.monthEnd"
                        ></date-picker>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Annual Target</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="distribution.annualTarget"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <small
                          ><label for="projectName">Currency</label></small
                        >
                        <model-list-select
                          :list="currenciesList"
                          v-model="distributionCurrenciesSelected"
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
                          ><label for="projectName">Total Order</label></small
                        >
                        <input
                          type="text"
                          class="form-control form-control-sm py-3"
                          v-model="distribution.totalOrder"
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
                    @click="insertDistributionAgreement()"
                  >
                    insert
                  </button>
  
                  <button
                    v-else
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="updateDistributionAgreement()"
                  >
                    Update
                  </button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
          <!-- /. Modal Distribution and Agreement -->
  
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
      await this.getDraftVendorByUserID(this.loggedUserId)

      await this.todaysDate();
      // await this.reInitiate();
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
          //Step1
          this.general.vendorTypeSelected = newValue.name
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

          //Step2
          console.log(this.businessTypeSelected.name);
          console.log(this.businessNatureSelected.name);
          console.log(this.business.authorizedCapitalStock);
          console.log(this.business.paidUpCapitalStock);
          console.log(this.business.notes);

          //Step 4
          console.log(this.purchasing.brand);
          console.log(this.purchasing.productLine);
          console.log(this.purchasing.services);
          console.log(this.purchasing.contactDetails);
          console.log(this.purchasing.ordering);
          console.log(this.purchasing.shipping);
          console.log(this.purchasing.documentation);
          console.log(this.purchasing.payment);
          console.log(this.purchasing.notes);
          console.log(this.poToBeSentSelected.code);
          console.log(this.poToBeSentSelected.name);

          // Step5
          console.log(this.AccountATCSelected.code);
          console.log(this.AccountATCSelected.atc);
          console.log(this.AccountDescSelected);
          console.log(this.AccountRateSelected);
          console.log(this.accounting.bank);
          console.log(this.accounting.branch);
          console.log(this.accounting.contactPerson);
          console.log(this.accounting.telephoneNumber);
          console.log(this.accounting.bankName);
          console.log(this.accounting.bankAcctNumber);
          console.log(this.accounting.bankBranch);
          console.log(this.accounting.bankSwiftCode);
          console.log(this.accounting.bankPreferred);

          //Step 6
          console.log(this.technical.warrantyNote);
          console.log(this.technical.policyNote);
          console.log(this.technical.attachmentNote);
      },

      counter() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
  
      // Validation
     
    },
    data() {
      return {
        counter: 0,
        setIndex: 0,
        i: 0,
        isButton: true,
        requestDate: "",
        isLoading: false,
        isSpinner: false,

        draftID: "",
  
        attemptNext: false,
        attemptNextOne: false,
        attemptNextTwo: false,
        attemptNextThree: false,
  
        // The Alert
        isAlert: false,
        header: "", // Syccess or Failed
        message: "", // added successfully
        type: "", // true or false
  
        // Logged User Data
        loggedUserId: localStorage.getItem("id"),
        loggedUserFirstName: localStorage.getItem("fname"),
        loggedUserLastName: localStorage.getItem("lname"),
        loggedUserDepartment: localStorage.getItem("department"),
        loggedUserPosition: localStorage.getItem("positionName"),
        companyId: localStorage.getItem("companyId"),
        companyName: localStorage.getItem("companyName"),

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
          vendorTypeSelected: '',
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
        businessEditData : [],
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

        addressStatusSelected: {},
        addressStatusList: [
          { code: 1, name: "Active" },
          { code: 2, name: "Inactive" }
        ],

        addressWorkFromList : [],
        addressWorkFromSelected : {},

        countriesList : [],
        countriesSelected : {},

        address: {
          shortName : '',
          line1 : '',
          line2 : '',
          city : '',
          province : '',
          zipcode : '',
          country : '',
          phoneNumber : '',
          email : '',
          fax : '',
          businessHours : '',
          preferredBilling : '',
          preferredShipping : '',
          notes : '',
        },

        addressData : [],
        addressEditData : [],

        contactLinkToSelected: {},
        contactLinkToList: [
          { code: 1, name: "Sales" },
          { code: 2, name: "Technical" },
          { code: 3, name: "Accounting" },
          { code: 4, name: "Management" }
        ],

        contactStatusSelected: {},
        contactStatusList: [
          { code: 1, name: "Active" },
          { code: 2, name: "Inactive" }
        ],

        contactPrefixesSelected : {},
        contact: {
          firstName : '',
          lastName : '',
          suffix : '',
          nickName : '',
          designation : '',
          department : '',
          mobileNumber : '',
          email : '',
          mobileNumberCheckbox : '',
          emailCheckbox : '',
          notes : '',
        },

        contactData : [],
        contactEditData : [],

        //purchasing
        purchasing: {
          brand: '',
          productLine: '',
          services: '',
          sentVia: '',
          contactDetails: '',
          ordering: '',
          shipping: '',
          documentation: '',
          payment: '',
          notes: '',
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
        purchasingSelectedFile: [],
        purchasingFilespreview: [],

        // accounting
        AccountATCList : [],
        AccountATCSelected : {},
        AccountDescSelected : '',
        AccountRateSelected : '',
        AccountCurrenciesSelected : {},
        accountingData : [],
        accountingEditData : [],
        accounting: {
          bank : '',
          branch : '',
          contactPerson : '',
          telephoneNumber : '',
          bankName : '',
          bankAcctNumber : '',
          bankBranch : '',
          bankSwiftCode : '',
          bankPreferred : '',
        },

        //Technical and Support
        technical: {
          warrantyNote: '',
          policyNote: '',
          attachmentNote: '',
        },
        technicalSelectedFile: [],
        technicalFilespreview: [],
        
        // Related To
        relatedVendorData : [],
        relatedVendorEditData : [],

        relatedCustomerData : [],
        relatedCustomerEditData : [],

        relationshipList : [],
        vendorRelationshipSelected : {},
        customerRelationshipSelected : {},

        relatedSupplierList : [],
        relatedSupplierCodeSelected : {},
        relatedSupplierNameSelected : '',

        relatedCustomerList : [],
        relatedCustomerCodeSelected : {},
        relatedCustomerNameSelected : '',

        // Attachments
        attachmentOneSelectedFile: [],
        attachmentOneFilespreview: [],
        attachmentTwoSelectedFile: [],
        attachmentTwoFilespreview: [],
        attachmentThreeSelectedFile: [],
        attachmentThreeFilespreview: [],
        attachmentFourSelectedFile: [],
        attachmentFourFilespreview: [],
        attachmentFiveSelectedFile: [],
        attachmentFiveFilespreview: [],
        attachmentSixSelectedFile: [],
        attachmentSixFilespreview: [],
        attachmentSevenSelectedFile: [],
        attachmentSevenFilespreview: [],

        // Distribution and Agreement
        distribution: {
          monthStart : '',
          monthEnd : '',
          annualTarget : '',
          totalOrder : '',
          notes : '',
        },
        distributionCurrenciesSelected : {},
        distributionAgreementData : [],         
        distributionAgreementEditData : [],

        distributionOneSelectedFile: [],
        distributionOneFilespreview: [],
        distributionTwoSelectedFile: [],
        distributionTwoFilespreview: [],
        distributionThreeSelectedFile: [],
        distributionThreeFilespreview: [],
        distributionFourSelectedFile: [],
        distributionFourFilespreview: [],

      };
    },
  
    methods: {

      // Step 2
      editCorporateOfficers(index) {
          this.isButton = false;
          const businessEditData = this.businessData[index];
          this.businessEditData = businessEditData;
          this.setIndex = index;

          this.business.firstName = businessEditData.firstName
          this.business.lastName = businessEditData.lastName
          this.business.suffix = businessEditData.suffix
          this.business.designation = businessEditData.designation
  
          this.prefixesSelected = {
              code: businessEditData.prefix_id,
              name: businessEditData.prefix_name,
          };
      },
      trashCorporateOfficers(index) {
          this.businessData.splice(index, 1);
      },
      updateCorporateOfficers() {
          this.resetAlert();

          const updateData = {
              id: this.businessEditData.id,
              prefix_name: this.prefixesSelected.name,
              prefix_id: this.prefixesSelected.code,
              firstName: this.business.firstName,
              lastName: this.business.lastName,
              suffix: this.business.suffix,
              designation: this.business.designation
          };

          this.businessData.push(updateData);
          this.businessEditData = "";
          this.businessData.splice(this.setIndex, 1);

          this.businessData.sort(function (a, b) {
              return a.id - b.id;
          });
          this.clearCorporateOfficers()
      },
      insertCorporateOfficers() {
          this.resetAlert();
  
          const addData = {
              id: this.i++,
              prefix_name: this.prefixesSelected.name,
              prefix_id: this.prefixesSelected.code,
              firstName: this.business.firstName,
              lastName: this.business.lastName,
              suffix: this.business.suffix,
              designation: this.business.designation
          };
          this.businessData.push(addData);
          this.clearCorporateOfficers()

          // this.addAlert("Success", "Expense details added successfully!", "true");
          // this.addAlert("Failed", "Please complete required fields!", "false");
      },
      clearCorporateOfficers() {
        this.prefixesSelected = {};
        this.business.firstName = "";
        this.business.lastName = "";
        this.business.suffix = "";
        this.business.designation = "";
      },
      //EO Step 2

      //Step3
      async insertAddress() {
        this.resetAlert();
  
        const addData = {
          shortName: this.address.shortName,
          line1: this.address.line1,
          line2: this.address.line2,
          city: this.address.city,
          province: this.address.province,
          zipcode: this.address.zipcode,
          phoneNumber: this.address.phoneNumber,
          email: this.address.email,
          fax: this.address.fax,
          businessHours: this.address.businessHours,
          preferredBilling: this.address.preferredBilling == '' ? 'False' : 'True',
          preferredShipping: this.address.preferredShipping == '' ? 'False' : 'True',
          notes: this.address.notes,

          addressType_id: this.addressTypeSelected.code,
          addressType_name: this.addressTypeSelected.name,
          // addressStatus_id: this.addressStatusSelected.code,
          // addressStatus_name: this.addressStatusSelected.name,
          countries_id: this.countriesSelected.code,
          countries_name: this.countriesSelected.name,
          draftID: this.draftID,
        };
        this.clearAddress()

        try {
          const resp = await axios.post("http://127.0.0.1:8000/api/saveBusinessListDetail", addData);
          console.log(resp.data);
          // this.openToast("top-right", "success", resp.data.message);
          
        } catch (err) {
          console.error(err);
          this.openToast("top-right","error","Please Contact the administrator! and try again later");
        }
        this.getAddressByBusinessNumber(this.draftID)
        this.getAddressWorkFromByBusinessNumber(this.draftID)
      },
      async trashAddress(index, id) {
        this.addressData.splice(index, 1);
        try {
          const resp = await axios.post("http://127.0.0.1:8000/api/deleteAddressByID", {id : id});
          console.log(resp.data);
          // this.openToast("top-right", "success", resp.data.message);
          
        } catch (err) {
          console.error(err);
          this.openToast("top-right","error","Please Contact the administrator! and try again later");
        }
      },
      editAddress(index) {
          this.isButton = false;
          const addressEditData = this.addressData[index];
          this.addressEditData = addressEditData;
          this.setIndex = index;

          this.address.shortName = addressEditData.short_name
          this.address.line1 = addressEditData.address_line
          this.address.line2 = addressEditData.address_line2
          this.address.city = addressEditData.city
          this.address.province = addressEditData.province
          this.address.zipcode = addressEditData.zip
          this.address.country = addressEditData.country
          this.address.phoneNumber = addressEditData.PhoneNum
          this.address.email = addressEditData.EmailAdd
          this.address.fax = addressEditData.Fax
          this.address.businessHours = addressEditData.business_hours
          this.address.preferredBilling = addressEditData.Preferred_Billing
          this.address.preferredShipping = addressEditData.Preferred_Shippping
          this.address.notes = addressEditData.Notes

          this.addressTypeSelected = {
              name: addressEditData.TypeOfAddress,
          };
          this.countriesSelected = {
              name: addressEditData.country,
          };

          // this.addressStatusSelected = {
          //     code: addressEditData.addressStatus_id,
          //     name: addressEditData.addressStatus_name,
          // };
         
      },
      clearAddress() {
        this.address.shortName = '',
        this.address.line1 = '',
        this.address.line2 = '',
        this.address.city = '',
        this.address.province = '',
        this.address.zipcode = '',
        this.address.country = '',
        this.address.phoneNumber = '',
        this.address.email = '',
        this.address.fax = '',
        this.address.businessHours = '',
        this.address.preferredBilling = '',
        this.address.preferredShipping = '',
        this.address.notes = ''
        this.addressTypeSelected = {},
        this.addressStatusSelected = {},
        this.countriesSelected = {}
      },
      async updateAddress() {
          this.resetAlert();

          const updateData = {
            id: this.addressEditData.ID,
            shortName: this.address.shortName,
            line1: this.address.line1,
            line2: this.address.line2,
            city: this.address.city,
            province: this.address.province,
            zipcode: this.address.zipcode,
            phoneNumber: this.address.phoneNumber,
            email: this.address.email,
            fax: this.address.fax,
            businessHours: this.address.businessHours,
            preferredBilling: this.address.preferredBilling == '' ? 'False' : 'True',
            preferredShipping: this.address.preferredShipping == '' ? 'False' : 'True',
            notes: this.address.notes,

            addressType_id: this.addressTypeSelected.code,
            addressType_name: this.addressTypeSelected.name,
            // addressStatus_id: this.addressStatusSelected.code,
            // addressStatus_name: this.addressStatusSelected.name,
            countries_id: this.countriesSelected.code,
            countries_name: this.countriesSelected.name,
            draftID: this.draftID,
          };
          this.clearAddress()

          // console.log(updateData);

          try {
            const resp = await axios.post("http://127.0.0.1:8000/api/updateBusinessListDetail", updateData);
            console.log(resp.data);
            // this.openToast("top-right", "success", resp.data.message);
            
          } catch (err) {
            console.error(err);
            this.openToast("top-right","error","Please Contact the administrator! and try again later");
          }
          this.getAddressByBusinessNumber(this.draftID)
      },




      insertContact() {
        this.resetAlert();
  
        const addData = {
          id: this.i++,
          firstName: this.contact.firstName,
          lastName: this.contact.lastName,
          suffix: this.contact.suffix,
          nickName: this.contact.nickName,
          designation: this.contact.designation,
          department: this.contact.department,
          mobileNumber: this.contact.mobileNumber,
          email: this.contact.email,
          mobileNumberCheckbox: this.contact.mobileNumberCheckbox,
          emailCheckbox: this.contact.emailCheckbox,
          notes: this.contact.notes,
          prefix_id: this.contactPrefixesSelected.code,
          prefix_name: this.contactPrefixesSelected.name,
          linkTo_id: this.contactLinkToSelected.code,
          linkTo_name: this.contactLinkToSelected.name,
          status_id: this.contactStatusSelected.code,
          status_name: this.contactStatusSelected.name,
        };
        console.log(addData);
      },
      //EO Step3

      //Step 4 
      purchasingFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.purchasingSelectedFile.push(selectedFiles[i]);
        }
        this.purchasingFilePreviews();
      },
      purchasingFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.purchasingSelectedFile.push(selectedFiles[i]);
        }
        this.purchasingFilePreviews();
      },
      purchasingFileRemove(i) {
        this.purchasingSelectedFile.splice(i, 1);
        this.purchasingFilePreviews();
      },
      purchasingFilePreview(i) {
        const url = this.purchasingFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      purchasingFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      purchasingFilePreviews() {
        let files = this.purchasingSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.purchasingFilespreview = fileContainer;
      },
      //EO Step 4

      //Step 5 
      insertBankInfo() {
          this.resetAlert();
  
          const addData = {
              id: this.i++,
              bankName: this.accounting.bankName,
              bankAcctNumber: this.accounting.bankAcctNumber,
              bankBranch: this.accounting.bankBranch,
              bankSwiftCode: this.accounting.bankSwiftCode,
              bankPreferred: this.accounting.bankPreferred,
              bank_currency_code: this.AccountCurrenciesSelected.code,
              bank_currency_name: this.AccountCurrenciesSelected.name,
          };
          this.accountingData.push(addData);
          this.clearBankInfo()

          // this.addAlert("Success", "Expense details added successfully!", "true");
          // this.addAlert("Failed", "Please complete required fields!", "false");
      },
      editBankInfo(index) {
          this.isButton = false;
          const accountingEditData = this.accountingData[index];
          this.accountingEditData = accountingEditData;
          this.setIndex = index;

          this.accounting.bankName = accountingEditData.bankName
          this.accounting.bankAcctNumber = accountingEditData.bankAcctNumber
          this.accounting.bankBranch = accountingEditData.bankBranch
          this.accounting.bankSwiftCode = accountingEditData.bankSwiftCode
          this.accounting.bankPreferred = accountingEditData.bankPreferred
  
          this.AccountCurrenciesSelected = {
              code: accountingEditData.bank_currency_code,
              name: accountingEditData.bank_currency_name,
          };
      },
      clearBankInfo() {
        this.AccountCurrenciesSelected = {};
        this.accounting.bankName = "";
        this.accounting.bankAcctNumber = "";
        this.accounting.bankBranch = "";
        this.accounting.bankSwiftCode = "";
        this.accounting.bankPreferred = "";
      },
      trashBankInfo(index) {
          this.accountingData.splice(index, 1);
      },
      updateBankInfo() {
          this.resetAlert();

          const updateData = {
              id: this.accountingEditData.id,
              bankName: this.accounting.bankName,
              bankAcctNumber: this.accounting.bankAcctNumber,
              bankBranch: this.accounting.bankBranch,
              bankSwiftCode: this.accounting.bankSwiftCode,
              bankPreferred: this.accounting.bankPreferred,
              bank_currency_code: this.AccountCurrenciesSelected.code,
              bank_currency_name: this.AccountCurrenciesSelected.name,
          };

          this.accountingData.push(updateData);
          this.accountingEditData = "";
          this.accountingData.splice(this.setIndex, 1);

          this.accountingData.sort(function (a, b) {
              return a.id - b.id;
          });
          this.clearBankInfo()
      },
      // EO Step 5

      //Step 6
      technicalFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.technicalSelectedFile.push(selectedFiles[i]);
        }
        this.technicalFilePreviews();
      },
      technicalFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.technicalSelectedFile.push(selectedFiles[i]);
        }
        this.technicalFilePreviews();
      },
      technicalFileRemove(i) {
        this.technicalSelectedFile.splice(i, 1);
        this.technicalFilePreviews();
      },
      technicalFilePreview(i) {
        const url = this.technicalFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      technicalFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      technicalFilePreviews() {
        let files = this.technicalSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.technicalFilespreview = fileContainer;
      },
      //EO Step 6

      //Step 7
      insertRelatedVendor() {
          this.resetAlert();
  
          const addData = {
              id: this.i++,
              vendor_relationship_code: this.vendorRelationshipSelected.code,
              vendor_relationship_name: this.vendorRelationshipSelected.name,
              vendor_code: this.relatedSupplierCodeSelected.code,
              vendor_name: this.relatedSupplierCodeSelected.name,
          };
          this.relatedVendorData.push(addData);
          this.clearRelatedVendor()

          // this.addAlert("Success", "Expense details added successfully!", "true");
          // this.addAlert("Failed", "Please complete required fields!", "false");
      },
      editRelatedVendor(index) {
          this.isButton = false;
          const relatedVendorEditData = this.relatedVendorData[index];
          this.relatedVendorEditData = relatedVendorEditData;
          this.setIndex = index;
  
          this.vendorRelationshipSelected = {
              code: relatedVendorEditData.vendor_relationship_code,
              name: relatedVendorEditData.vendor_relationship_name,
          };
          this.relatedSupplierCodeSelected = {
              code: relatedVendorEditData.vendor_code,
              name: relatedVendorEditData.vendor_name,
          };
      },
      updateRelatedVendor() {
          this.resetAlert();

          const updateData = {
              id: this.relatedVendorEditData.id,
              vendor_relationship_code: this.vendorRelationshipSelected.code,
              vendor_relationship_name: this.vendorRelationshipSelected.name,
              vendor_code: this.relatedSupplierCodeSelected.code,
              vendor_name: this.relatedSupplierCodeSelected.name,
          };

          this.relatedVendorData.push(updateData);
          this.relatedVendorEditData = "";
          this.relatedVendorData.splice(this.setIndex, 1);

          this.relatedVendorData.sort(function (a, b) {
              return a.id - b.id;
          });
          this.clearRelatedVendor()
      },
      clearRelatedVendor() {
        this.vendorRelationshipSelected = {};
        this.relatedSupplierCodeSelected = {};
      },
      trashRelatedVendor(index) {
          this.relatedVendorData.splice(index, 1);
      },

      insertRelatedCustomer() {
          this.resetAlert();
  
          const addData = {
              id: this.i++,
              customer_relationship_code: this.customerRelationshipSelected.code,
              customer_relationship_name: this.customerRelationshipSelected.name,
              customer_code: this.relatedCustomerCodeSelected.code,
              customer_name: this.relatedCustomerCodeSelected.name,
          };
          this.relatedCustomerData.push(addData);
          this.clearRelatedCustomer()

          // this.addAlert("Success", "Expense details added successfully!", "true");
          // this.addAlert("Failed", "Please complete required fields!", "false");
      },
      updateRelatedCustomer() {
          this.resetAlert();

          const updateData = {
              id: this.relatedCustomerEditData.id,
              customer_relationship_code: this.customerRelationshipSelected.code,
              customer_relationship_name: this.customerRelationshipSelected.name,
              customer_code: this.relatedCustomerCodeSelected.code,
              customer_name: this.relatedCustomerCodeSelected.name,
          };

          this.relatedCustomerData.push(updateData);
          this.relatedCustomerEditData = "";
          this.relatedCustomerData.splice(this.setIndex, 1);

          this.relatedCustomerData.sort(function (a, b) {
              return a.id - b.id;
          });
          this.clearRelatedVendor()
      },
      clearRelatedCustomer() {
        this.customerRelationshipSelected = {};
        this.relatedCustomerCodeSelected = {};
      },
      trashRelatedCustomer(index) {
          this.relatedCustomerData.splice(index, 1);
      },
      editRelatedCustomer(index) {
          this.isButton = false;
          const relatedCustomerEditData = this.relatedCustomerData[index];
          this.relatedCustomerEditData = relatedCustomerEditData;
          this.setIndex = index;
  
          this.customerRelationshipSelected = {
              code: relatedCustomerEditData.customer_relationship_code,
              name: relatedCustomerEditData.customer_relationship_name,
          };
          this.relatedCustomerCodeSelected = {
              code: relatedCustomerEditData.customer_code,
              name: relatedCustomerEditData.customer_name,
          };
      },
      //EO Step 7

      // Step8 
      // 1. Accomplished Vendor Information Sheet
      attachmentOneFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentOneSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentOneFilePreviews();
      },
      attachmentOneFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentOneSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentOneFilePreviews();
      },
      attachmentOneFileRemove(i) {
        this.attachmentOneSelectedFile.splice(i, 1);
        this.attachmentOneFilePreviews();
      },
      attachmentOneFilePreview(i) {
        const url = this.attachmentOneFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      attachmentOneFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      attachmentOneFilePreviews() {
        let files = this.attachmentOneSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.attachmentOneFilespreview = fileContainer;
      },

      // 2. Business Registration
      attachmentTwoFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentTwoSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentTwoFilePreviews();
      },
      attachmentTwoFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentTwoSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentTwoFilePreviews();
      },
      attachmentTwoFileRemove(i) {
        this.attachmentTwoSelectedFile.splice(i, 1);
        this.attachmentTwoFilePreviews();
      },
      attachmentTwoFilePreview(i) {
        const url = this.attachmentTwoFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      attachmentTwoFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      attachmentTwoFilePreviews() {
        let files = this.attachmentTwoSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.attachmentTwoFilespreview = fileContainer;
      },

      // 3. Updated Business Permit
      attachmentThreeFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentThreeSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentThreeFilePreviews();
      },
      attachmentThreeFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentThreeSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentThreeFilePreviews();
      },
      attachmentThreeFileRemove(i) {
        this.attachmentThreeSelectedFile.splice(i, 1);
        this.attachmentThreeFilePreviews();
      },
      attachmentThreeFilePreview(i) {
        const url = this.attachmentThreeFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      attachmentThreeFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      attachmentThreeFilePreviews() {
        let files = this.attachmentThreeSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.attachmentThreeFilespreview = fileContainer;
      },

      // 4. BIR Certificate of Registration: BIR 2303 form
      attachmentFourFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentFourSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentFourFilePreviews();
      },
      attachmentFourFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentFourSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentFourFilePreviews();
      },
      attachmentFourFileRemove(i) {
        this.attachmentFourSelectedFile.splice(i, 1);
        this.attachmentFourFilePreviews();
      },
      attachmentFourFilePreview(i) {
        const url = this.attachmentFourFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      attachmentFourFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      attachmentFourFilePreviews() {
        let files = this.attachmentFourSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.attachmentFourFilespreview = fileContainer;
      },

      // 5. Sample of Delivery Receipt, Sales Invoice, Official Receipt
      attachmentFiveFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentFiveSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentFiveFilePreviews();
      },
      attachmentFiveFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentFiveSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentFiveFilePreviews();
      },
      attachmentFiveFileRemove(i) {
        this.attachmentFiveSelectedFile.splice(i, 1);
        this.attachmentFiveFilePreviews();
      },
      attachmentFiveFilePreview(i) {
        const url = this.attachmentFiveFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      attachmentFiveFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      attachmentFiveFilePreviews() {
        let files = this.attachmentFiveSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.attachmentFiveFilespreview = fileContainer;
      },

      // 6. Company/Business Profile
      attachmentSixFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentSixSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentSixFilePreviews();
      },
      attachmentSixFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentSixSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentSixFilePreviews();
      },
      attachmentSixFileRemove(i) {
        this.attachmentSixSelectedFile.splice(i, 1);
        this.attachmentSixFilePreviews();
      },
      attachmentSixFilePreview(i) {
        const url = this.attachmentSixFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      attachmentSixFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      attachmentSixFilePreviews() {
        let files = this.attachmentSixSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.attachmentSixFilespreview = fileContainer;
      },

      // 7. Latest Audited Financial Statements
      attachmentSevenFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentSevenSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentSevenFilePreviews();
      },
      attachmentSevenFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.attachmentSevenSelectedFile.push(selectedFiles[i]);
        }
        this.attachmentSevenFilePreviews();
      },
      attachmentSevenFileRemove(i) {
        this.attachmentSevenSelectedFile.splice(i, 1);
        this.attachmentSevenFilePreviews();
      },
      attachmentSevenFilePreview(i) {
        const url = this.attachmentSevenFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      attachmentSevenFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      attachmentSevenFilePreviews() {
        let files = this.attachmentSevenSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.attachmentSevenFilespreview = fileContainer;
      },
      // EO Step8

      // Step 9
      insertDistributionAgreement() {
          this.resetAlert();
  
          const addData = {
              id: this.i++,
              monthStart: this.distribution.monthStart,
              monthEnd: this.distribution.monthEnd,
              annualTarget: this.distribution.annualTarget,
              totalOrder: this.distribution.totalOrder,
              currency_code: this.distributionCurrenciesSelected.code,
              currency_name: this.distributionCurrenciesSelected.name,
          };
          this.distributionAgreementData.push(addData);
          this.clearDistributionAgreement()

          // this.addAlert("Success", "Expense details added successfully!", "true");
          // this.addAlert("Failed", "Please complete required fields!", "false");
      },
      updateDistributionAgreement() {
          this.resetAlert();

          const updateData = {
              id: this.distributionAgreementEditData.id,
              monthStart: this.distribution.monthStart,
              monthEnd: this.distribution.monthEnd,
              annualTarget: this.distribution.annualTarget,
              totalOrder: this.distribution.totalOrder,
              currency_code: this.distributionCurrenciesSelected.code,
              currency_name: this.distributionCurrenciesSelected.name,
          };

          this.distributionAgreementData.push(updateData);
          this.distributionAgreementEditData = "";
          this.distributionAgreementData.splice(this.setIndex, 1);

          this.distributionAgreementData.sort(function (a, b) {
              return a.id - b.id;
          });
          this.clearDistributionAgreement()
      },
      editDistributionAgreement(index) {
          this.isButton = false;
          const distributionAgreementEditData = this.distributionAgreementData[index];
          this.distributionAgreementEditData = distributionAgreementEditData;
          this.setIndex = index;
  
          this.distributionCurrenciesSelected = {
              code: distributionAgreementEditData.currency_code,
              name: distributionAgreementEditData.currency_name,
          };
          this.distribution.monthStart = distributionAgreementEditData.monthStart
          this.distribution.monthEnd = distributionAgreementEditData.monthEnd
          this.distribution.annualTarget = distributionAgreementEditData.annualTarget
          this.distribution.totalOrder = distributionAgreementEditData.totalOrder
      },
      trashDistributionAgreement(index) {
          this.distributionAgreementData.splice(index, 1);
      },
      clearDistributionAgreement() {
        this.distributionCurrenciesSelected = {};
        this.distribution.monthStart = '';
        this.distribution.monthEnd = '';
        this.distribution.annualTarget = '';
        this.distribution.totalOrder = '';
      },

      // 1. Agreement
      distributionOneFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.distributionOneSelectedFile.push(selectedFiles[i]);
        }
        this.distributionOneFilePreviews();
      },
      distributionOneFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.distributionOneSelectedFile.push(selectedFiles[i]);
        }
        this.distributionOneFilePreviews();
      },
      distributionOneFileRemove(i) {
        this.distributionOneSelectedFile.splice(i, 1);
        this.distributionOneFilePreviews();
      },
      distributionOneFilePreview(i) {
        const url = this.distributionOneFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      distributionOneFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      distributionOneFilePreviews() {
        let files = this.distributionOneSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.distributionOneFilespreview = fileContainer;
      },

      // 2. NDA
      distributionTwoFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.distributionTwoSelectedFile.push(selectedFiles[i]);
        }
        this.distributionTwoFilePreviews();
      },
      distributionTwoFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.distributionTwoSelectedFile.push(selectedFiles[i]);
        }
        this.distributionTwoFilePreviews();
      },
      distributionTwoFileRemove(i) {
        this.distributionTwoSelectedFile.splice(i, 1);
        this.distributionTwoFilePreviews();
      },
      distributionTwoFilePreview(i) {
        const url = this.distributionTwoFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      distributionTwoFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      distributionTwoFilePreviews() {
        let files = this.distributionTwoSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.distributionTwoFilespreview = fileContainer;
      },

      // 3. Distributor Certificate
      distributionThreeFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.distributionThreeSelectedFile.push(selectedFiles[i]);
        }
        this.distributionThreeFilePreviews();
      },
      distributionThreeFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.distributionThreeSelectedFile.push(selectedFiles[i]);
        }
        this.distributionThreeFilePreviews();
      },
      distributionThreeFileRemove(i) {
        this.distributionThreeSelectedFile.splice(i, 1);
        this.distributionThreeFilePreviews();
      },
      distributionThreeFilePreview(i) {
        const url = this.distributionThreeFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      distributionThreeFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      distributionThreeFilePreviews() {
        let files = this.distributionThreeSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.distributionThreeFilespreview = fileContainer;
      },

      // 4. Attachments
      distributionFourFileOnFileSelected(event) {
        let selectedFiles = event.target.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.distributionFourSelectedFile.push(selectedFiles[i]);
        }
        this.distributionFourFilePreviews();
      },
      distributionFourFileOnInputChange(event) {
        let selectedFiles = event.dataTransfer.files;
        for (let i = 0; i < selectedFiles.length; i++) {
          this.distributionFourSelectedFile.push(selectedFiles[i]);
        }
        this.distributionFourFilePreviews();
      },
      distributionFourFileRemove(i) {
        this.distributionFourSelectedFile.splice(i, 1);
        this.distributionFourFilePreviews();
      },
      distributionFourFilePreview(i) {
        const url = this.distributionFourFilespreview[i].link;
        window.open(url, "_blank", "resizable=yes");
      },
      distributionFourFileDrop(event) {
        event.preventDefault();
        this.onInputChange(event); // Trigger the onChange event manually

        // Clean up
        event.currentTarget.classList.add("bg-light");
        event.currentTarget.classList.remove("bg-white");
      },
      distributionFourFilePreviews() {
        let files = this.distributionFourSelectedFile;
        const fileContainer = [];
        for (let i = 0; i < files.length; i++) {
          let tmppath = URL.createObjectURL(files[i]);
          const thisFiles = {
            link: tmppath,
          };
          fileContainer.push(thisFiles);
        }
        this.distributionFourFilespreview = fileContainer;
      },
      // EO Step 9 

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
      async getDraftVendorByUserID(userid) {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getDraftVendorByUserID/${userid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const responseData = await response.json();
        this.draftID = responseData.draftID
      }, 
      async getAddressByBusinessNumber(draftID) {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getAddressByBusinessNumber/${draftID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const responseData = await response.json();
        this.addressData = responseData
      }, 
      async getAddressWorkFromByBusinessNumber(draftID) {
        const response = await fetch(
          `http://127.0.0.1:8000/api/getAddressWorkFromByBusinessNumber/${draftID}`,
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
          let workFromData = [];
          for (const key in responseData) {
            const request = {
              name: responseData[key].workfrom
            };
            workFromData.push(request);
          }
          this.addressWorkFromList = workFromData
        }
      }, 

      // The Attachments 
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
      submit() {
        console.log('submitted');
      },

  
      
      next() {
        this.counter++;
      },
      setButton() {
        this.isButton = true;
      },
      closeModal() {
        this.resetAlert();
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
      openToast(position, variant, message) {
        const toastTitle = variant.charAt(0).toUpperCase() + variant.slice(1);
        VsToast.show({
          title: `${toastTitle}`,
          message: `${message}`,
          variant,
          position,
        });
      },
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
      
      formatNumber(n) {
      // format number 1000000 to 1,234,567
        return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
  
  #assetsFieldHandle, #assetsFieldHandle1, #assetsFieldHandle2, #assetsFieldHandle3, #assetsFieldHandle4, #assetsFieldHandle5, #assetsFieldHandle6, #assetsFieldHandle7 {
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
  