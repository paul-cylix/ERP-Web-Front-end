<template>
  <!-- Container -->
  <div class="col-md-12 mt-3">
    <div class="card card-secondary chrome">
      <div
        class="overlay"
        style="background-color: white !important"
        v-show="isLoading"
      >
        <loading-spinner></loading-spinner>
      </div>

      <div class="card-header">
        <h3 class="card-title">Materials Request</h3>
      </div>
      <div class="card-body">
        <!-- Buttons -->
        <div class="row">
          <div class="col-md-6">
            <button
              class="btn mr-1 btn-secondary btn-sm"
              v-show="counter"
              
              @click="previous()"
            >
              Previous
            </button>
            <button
              
              class="btn mr-1 btn-primary btn-sm"
              v-show="counter <= 2"
              @click="next()"
            >
              Next
            </button>
          </div>

          <div class="col-md-6 text-right">
            <!-- <button
              class="btn ml-1 btn-warning btn-sm"
              data-toggle="modal"
              data-target="#modal-default"
            >
              Withdraw
            </button> -->
            <button class="btn ml-1 btn-danger btn-sm" @click="close()">
              Close
            </button>
          </div>
          <!-- /. Buttons -->
        </div>
        <!-- /.Buttons -->

        <!-- Progress Bar -->
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
        </div>
        <div class="d-flex text-center mb-4">
          <div class="textbar" :class="classA">
            <small
              ><span :class="classA" class="font-weight-bold"
                >Request Details</span
              ></small
            >
          </div>
          <div class="textbar" :class="classB">
            <small
              ><span :class="classB" class="font-weight-bold"
                >Request Form</span
              ></small
            >
          </div>
          <div class="textbar" :class="classC">
            <small
              ><span :class="classC" class="font-weight-bold"
                >Attachments</span
              ></small
            >
          </div>
          <div class="textbar" :class="classD">
            <small
              ><span :class="classD" class="font-weight-bold"
                >Form Review</span
              ></small
            >
          </div>
        </div>
        <!-- /. Progress Bar -->

        <!-- #2 request details-->
        <section v-show="counter === 1">
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="class-name">Class</label></small>
                <!-- <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                /> -->

                <model-list-select
                  :list="classList"
                  v-model="classListItem"
                  option-value="code"
                  option-text="name"
                  placeholder="select item"
                  :style="isItDisabled(true)"
                  :isDisabled="true"
                >
                </model-list-select>
                <small
                  class="text-danger p-0 m-0"
                  v-if="missingClass && attemptNext"
                  >Class is required!</small
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="type-name">Type</label></small>
                <!-- <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                /> -->

                <model-list-select
                  :list="typeList"
                  v-model="typeListItem"
                  option-value="code"
                  option-text="name"
                  placeholder="select item"
                  :style="isItDisabled(true)"
                  :isDisabled="true"
                >
                </model-list-select>
                <small
                  class="text-danger p-0 m-0"
                  v-if="missingType && attemptNext"
                  >Type is required!</small
                >
              </div>
            </div>
          </div>

          <div class="row" v-show="isProcessTypeList">
            <div class="col">
              <div class="form-group">
                <small
                  ><label for="class-type"
                    >Type of Supplies Request Internal</label
                  ></small
                >
                <model-list-select
                  :list="processTypeList"
                  v-model="processTypeListItem"
                  option-value="code"
                  option-text="name"
                  placeholder="select item"
                  :style="isItDisabled(true)"
                  :isDisabled="true"
                >
                </model-list-select>
                <small
                  class="text-danger p-0 m-0"
                  v-if="missingProcessType && attemptNext"
                  >This field is required!</small
                >
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <div class="form-group">
                <small
                  ><label for="reference-number">Reference Number</label></small
                >
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  disabled
                  v-model="mrf_number"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small
                  ><label for="requested-date">Requested Date</label></small
                >
                <date-picker
                  disabled
                  valueType="format"
                  style="display: block; width: 100%; line-height: 20px"
                  v-model="requestedDate"
                ></date-picker>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small
                  ><label for="actual-delivery-date"
                    >Actual Delivery Date</label
                  ></small
                >
                <date-picker
                  v-model="actualDeliveryDate"
                  value-type="format"
                  style="display: block; width: 100%; line-height: 20px"
                ></date-picker>
                <small
                  class="text-danger p-0 m-0"
                  v-if="missingActualDeliveryDate && attemptNext"
                  >Actual Delivery Date is required!</small
                >
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small
                  ><label for="planned-delivery-date"
                    >Planned Delivery Date</label
                  ></small
                >
                <date-picker
                  v-model="plannedDeliveryDate"
                  value-type="format"
                  style="display: block; width: 100%; line-height: 20px"
                ></date-picker>
                <small
                  class="text-danger p-0 m-0"
                  v-if="missingPlannedDeliveryDate && attemptNext"
                  >Planned Delivery Date is required!</small
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <small
                  ><label for="mrf-short-text">MRF Short Text</label></small
                >
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  v-model="mrfShortText"
                />
                <small
                  class="text-danger p-0 m-0"
                  v-if="missingMrfShortText && attemptNext"
                  >MRF Short Text is required!</small
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <small
                  ><label for="reporting-manager"
                    >Reporting Manager</label
                  ></small
                >
                <model-list-select
                  :list="reportingManager"
                  v-model="reportingManagerItem"
                  option-value="code"
                  option-text="name"
                  placeholder="select item"
                  style="padding: 9px"
                >
                </model-list-select>
                <small
                  class="text-danger p-0 m-0"
                  v-if="missingReportingManager && attemptNext"
                  >Reporting Manager is required!</small
                >
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="cost-center">Cost Center</label></small>
                <model-list-select
                  :list="costCenter"
                  v-model="costCenterItem"
                  option-value="code"
                  option-text="name"
                  placeholder="select item"
                  style="padding: 9px"
                >
                </model-list-select>
                <small
                  class="text-danger p-0 m-0"
                  v-if="missingCostCenterItem && attemptNext"
                  >Cost Center is required!</small
                >
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="client-name">Client Name</label></small>
                <input
                  type="text"
                  disabled
                  class="form-control py-3 form-control-sm"
                  id="clientName"
                  v-model="clientName"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group">
                <small><label for="purpose">Remarks</label></small>
                <!-- <textarea class="form-control" name="purpose" id="purpose" :value="message" @input="updateMessage"  rows="5"></textarea> -->
                <textarea
                  class="form-control"
                  name="purpose"
                  id="purpose"
                  v-model="remarks"
                  rows="5"
                ></textarea>
                <small
                  class="text-danger p-0 m-0"
                  v-if="missingRemarks && attemptNext"
                  >Remarks is required!</small
                >
              </div>
            </div>
          </div>
        </section>

        <!-- #3 attach-->
        <section class="mb-4" v-show="counter === 2">
          <div class="row mt-4">
            <div
              class="pt-2 col-md-12 rounded"
              @dragover="dragover"
              @dragleave="dragleave"
              @drop="drop"
              id="uploadContainer"
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
                style="width: 100%; text-align: center; cursor: pointer"
                class="block pt-3 cursor-pointer"
              >
                <span class="text-secondary">Click here or drop file(s)</span>
              </label>

              <ul class="pb-3 text-decoration-none ulUpload" v-cloak>
                <!-- SOF ATTACHMENTS -->
                <li
                  class="text-sm mt-2"
                  v-for="file in selectedFileSOF"
                  :key="file.id"
                >
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-4 d-flex">
                      <div class="col text-left">
                        <span
                          ><label>{{ file.filename }}</label></span
                        >
                      </div>

                      <div>
                        <a
                          class="btn btn-info btn-sm"
                          :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`"
                          target="_blank"
                          >Download</a
                        >
                      </div>

                      <div class="ml-1">
                        <a
                          class="btn btn-secondary btn-sm"
                          :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`"
                          target="_blank"
                          >Preview</a
                        >
                      </div>
                    </div>
                  </div>
                </li>
                <!-- ./ SOF ATTACHMENTS -->

                <!-- MRF ATTACHMENTS -->
                <li
                  class="text-sm mt-2"
                  v-for="(file, index) in selectedFileMRF"
                  :key="file.id"
                >
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-4 d-flex">
                      <div class="col text-left">
                        <span
                          ><label>{{ file.filename }}</label></span
                        >
                      </div>

                      <div>
                        <a
                          class="btn btn-info btn-sm"
                          :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`"
                          target="_blank"
                          >Download</a
                        >
                      </div>

                      <div class="ml-1">
                        <button
                          class="btn btn-danger btn-sm"
                          type="button"
                          @click="
                            removeAttachedFile(
                              index,
                              file.id,
                              file.filename,
                              file.filepath
                            )
                          "
                          title="Remove file"
                        >
                          Remove
                        </button>
                      </div>

                      <div class="ml-1">
                        <a
                          class="btn btn-secondary btn-sm"
                          :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`"
                          target="_blank"
                          >Preview</a
                        >
                      </div>
                    </div>
                  </div>
                </li>
                <!-- ./ MRF ATTACHMENTS -->

                <!-- NEWLY ADDED ATTACHMENTS -->
                <li
                  class="text-sm mt-2"
                  v-for="file in selectedFileNew"
                  :key="file.index"
                >
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-4 d-flex">
                      <div class="col text-left">
                        <span
                          ><label>{{ file.name }}</label></span
                        >
                      </div>
                      <div>
                        <button
                          class="btn btn-danger btn-sm"
                          type="button"
                          @click="removeFileNew(selectedFileNew.indexOf(file))"
                          title="Remove file"
                        >
                          Remove
                        </button>
                      </div>
                      <div class="ml-1">
                        <button
                          class="btn btn-secondary btn-sm"
                          @click="filePreviewNew(selectedFileNew.indexOf(file))"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- ./NEWLY ADDED ATTACHMENTS -->
              </ul>
            </div>
          </div>
        </section>

        <!-- #4 request details review (current active)-->
        <section class="card card-secondary" v-show="counter === 3">
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
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">MRF Number</td>
                  <td class="col-md-9 px-3">{{ mrf_number }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Department</td>
                  <td class="col-md-9 px-3">{{ department }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Full Name</td>
                  <td class="col-md-9 px-3">{{ full_name }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Reporting Manager</td>
                  <td class="col-md-9 px-3">{{ reportingManagerItem.name }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">MRF Short Text</td>
                  <td class="col-md-9 px-3">{{ mrfShortText }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Date Requested</td>
                  <td class="col-md-9 px-3">{{ date_requested }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Planned Delivery Date</td>
                  <td class="col-md-9 px-3">{{ planned_delivery_date }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Actual Delivery Date</td>
                  <td class="col-md-9 px-3">{{ actual_delivery_date }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Cost Center</td>
                  <td class="col-md-9 px-3">{{ cost_center }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Client Name</td>
                  <td class="col-md-9 px-3">{{ clientName }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Materials Request Class</td>
                  <td class="col-md-9 px-3">{{ materials_request_class }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Materials Request Type</td>
                  <td class="col-md-9 px-3">{{ materials_request_type }}</td>
                </tr>
                <tr class="row p-0 m-0">
                  <td class="col-md-3 px-3">Remarks</td>
                  <td class="col-md-9 px-3">{{ remarks }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </section>

        <!-- #4 attachments review (current active)-->
        <section class="card card-secondary" v-show="counter === 3">
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
              <thead class="p-0 m-0">
                <tr class="row p-0 m-0">
                  <th class="col-md-9 px-3">Filename</th>
                  <th class="col-md-3 px-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="row p-0 m-0"
                  v-for="file in selectedFileSOF"
                  :key="file.id"
                >
                  <td class="col-md-9 px-3">{{ file.filename }}</td>
                  <td
                    class="col-md-3 pl-2 pr-2 text-center d-flex justify-content-center align-items-center"
                  >
                    <a
                      class="btn btn-info btn-sm"
                      :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`"
                      target="_blank"
                      >Download</a
                    >
                    <a
                      class="btn btn-secondary btn-sm ml-1"
                      :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`"
                      target="_blank"
                      >Preview</a
                    >
                  </td>
                </tr>

                <tr
                  class="row p-0 m-0"
                  v-for="file in selectedFileMRF"
                  :key="file.id"
                >
                  <td class="col-md-9 px-3">{{ file.filename }}</td>
                  <td
                    class="col-md-3 pl-2 pr-2 text-center d-flex justify-content-center align-items-center"
                  >
                    <a
                      class="btn btn-info btn-sm"
                      :href="`http://127.0.0.1:8000/api/downloadFile?filepath=${file.fileDestination}&filename=${file.filename}`"
                      target="_blank"
                      >Download</a
                    >
                    <a
                      class="btn btn-secondary btn-sm ml-1"
                      :href="`http://127.0.0.1:8000/${file.filepath}/${file.filename}`"
                      target="_blank"
                      >Preview</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </section>

        <!-- Requested Items (current active)-->
        <section
          class="card card-secondary"
          v-show="counter === 0 || counter === 3"
        >
          <div class="card-header">
            <h3 class="card-title">Requested Items</h3>

            <div class="card-tools">
              <button
                class="btn btn-success btn-sm"
                data-toggle="modal"
                data-target="#modal-add"
              >
                Add Item
              </button>

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
          <div class="card-body anyClass scroll-bar">
            <!-- Checkout list -->
            <!-- Request Details -->
            <!-- Checkout loop -->

            <!-- NEW DESIGN -->
            <div class="col-12">
            
              <div
                class="card card-secondary card-outline card-outline-tabs"
                v-for="item in requested_items"
                :key="item.req_dtls_id"
              >
                <div class="card-header p-0 border-bottom-0">
                  <ul
                    class="nav nav-tabs"
                    :id="`tab-${item.req_dtls_id}`"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        :id="`home-tab-${item.req_dtls_id}`"
                        data-toggle="pill"
                        :href="`#home-${item.req_dtls_id}`"
                        role="tab"
                        :aria-controls="`home-${item.req_dtls_id}`"
                        aria-selected="true"
                        >Item Details</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        :id="`profile-tab-${item.req_dtls_id}`"
                        data-toggle="pill"
                        :href="`#profile-${item.req_dtls_id}`"
                        role="tab"
                        :aria-controls="`profile-${item.req_dtls_id}`"
                        aria-selected="false"
                        >Delivery Notes</a
                      >
                    </li>

                    <li class="nav-link d-flex align-items-center">
                      <button
                        class="btn btn-danger btn-sm"
                        data-toggle="modal"
                        data-target="#modal-confirm"
                        @click="setToDeleteItem(item.req_dtls_id)"
                      >
                        Delete Item
                      </button>
                    </li>
                  </ul>
                </div>

                <div class="card-body">
                  <div
                    class="tab-content"
                    :id="`tabContent-${item.req_dtls_id}`"
                  >
                    <div
                      class="tab-pane fade show active"
                      :id="`home-${item.req_dtls_id}`"
                      role="tabpanel"
                      :aria-labelledby="`home-tab-${item.req_dtls_id}`"
                    >
                      <div class="d-flex gap-2">
                        <img
                          src="https://www.mouti.net/wp-content/plugins/tutor/assets/images/placeholder.svg"
                          style="
                            height: 8rem;
                            display: block;
                            width: auto;
                            object-fit: contain;
                          "
                          alt=""
                          srcset=""
                          class="card--img"
                        />
                        <div class="flex-fill">
                          <strong class="ellipsis">{{
                            item.description
                          }}</strong>
                          <p class="card--description ellipsis-2">
                            {{ item.specification }}
                          </p>
                          <ul class="card--details">
                            <li>
                              <span class="light">Item Code:</span
                              ><span class="dark">{{ item.item_code }}</span>
                            </li>
                            <li>
                              <span class="light">UoM:</span
                              ><span class="dark"></span>{{ item.uom }}
                            </li>
                            <li>
                              <span class="light">Category:</span
                              ><span class="dark">{{
                                item.category_name
                              }}</span>
                            </li>
                            <li>
                              <span class="light">SKU:</span
                              ><span class="dark">{{ item.sku }}</span>
                            </li>
                            <li>
                              <span class="light">Sub Category:</span
                              ><span class="dark">{{
                                item.sub_category_name
                              }}</span>
                            </li>
                            <li>
                              <span class="light">PR Qty:</span
                              ><span class="dark">{{ item.order_qty }}</span>
                            </li>
                            <li>
                              <span class="light">Brand:</span
                              ><span class="dark">{{ item.brand_name }}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      class="tab-pane fade"
                      :id="`profile-${item.req_dtls_id}`"
                      role="tabpanel"
                      :aria-labelledby="`profile-tab-${item.req_dtls_id}`"
                    >
                      <div class="form-group">
                        <small
                          ><label for="reference">Date Delivered</label></small
                        >
                        <date-picker
                          disabled
                          v-model="item.date_delivered"
                          valueType="format"
                          style="display: block; width: 100%; line-height: 20px border:red;"
                        ></date-picker>
                      </div>

                      <div class="form-group">
                        <small><label for="purpose">Purpose</label></small>
                        <textarea
                          disabled
                          v-model="item.notes"
                          class="form-control"
                          name="purpose"
                          rows="2"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /.card -->
              </div>












            </div>
            <!-- /. NEW DESIGN -->

            <!-- <div class="card py-0" v-for="(item) in requested_items" :key="item.req_dtls_id">
              <div class="row py-2">
                <div
                  class="
                    col-md-3
                    p-0
                    m-0
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <img
                    src="https://www.mouti.net/wp-content/plugins/tutor/assets/images/placeholder.svg"
                    style="
                      height: 180px;
                      display: block;
                      width: auto;
                      object-fit: contain;
                    "
                    alt=""
                    srcset=""
                    class=""
                  />
                </div>

                <div class="col-md-9 p-3">
                  <strong class="ellipsis">{{ item.description }}</strong>
                  <p class="card--description ellipsis">{{ item.specification }}</p>
                  <ul class="card--details">
                    <li><span class="light">Item Code:</span><span class="dark">{{item.item_code}}</span></li>
                    <li><span class="light">UoM:</span><span class="dark"></span>{{item.uom}}</li>
                    <li><span class="light">Category:</span><span class="dark">{{item.category_name}}</span></li>
                    <li><span class="light">SKU:</span><span class="dark">{{item.sku}}</span></li>
                    <li><span class="light">Sub Category:</span><span class="dark">{{item.sub_category_name}}</span></li>
                    <li><span class="light">PR Qty:</span><span class="dark">{{item.order_qty}}</span></li>
                    <li><span class="light">Brand:</span><span class="dark">{{item.brand_name}}</span></li>
                  </ul>
                </div>
              </div>
            </div> -->

            <!-- /.Checkout loop -->
            <!-- /.Request Details -->
            <!-- /.Checkout list -->
          </div>
          <!-- /.card-body -->
        </section>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modal-default"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Overlay Loading Spinner -->
          <div class="overlay" v-show="isLoadingModal">
            <i class="fas fa-2x fa-sync fa-spin"></i>
          </div>

          <div class="modal-header">
            <h6 class="modal-title"><b>Withdraw Request</b></h6>
            <button
              type="button"
              id="modalCloseButton"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <small><label for="withdrawRemarks">Remarks</label></small>
                  <textarea
                    class="form-control"
                    id="withdrawRemarks"
                    rows="5"
                    v-model="withdrawRemarks"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-end">
            <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
            <button
              type="button"
              @click="withdrawn()"
              class="btn btn-primary btn-sm"
            >
              Withdrawn
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- Modal Confirm -->
    <div
      class="modal fade"
      id="modal-confirm"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              <b>Confirm</b>
            </h6>
            <button
              type="button"
              id="modalCloseButton"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              ref="refSaveDraftCloseBtn"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <h6 class="text-center">
              Are you sure you want to delete this item?
            </h6>
          </div>
          <div class="modal-footer justify-content-end">
            <button
              type="button"
              class="btn btn-success btn-sm"
              @click="deleteItem()"
            >
              <i class="fas fa-check mr-1"></i>
              Yes
            </button>

            <!-- <div v-else>
              <button disabled type="button" class="btn btn-success btn-sm">
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                Saving...
              </button>
            </div> -->

            <button
              type="button"
              class="btn btn-danger btn-sm"
              data-dismiss="modal"
              aria-label="Close"
              ref="refModalCloseBtn"
            >
              <i class="fas fa-times mr-1"></i>
              No
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.Modal Confirm-->

    <!-- Modal Add -->
    <div
      class="modal fade"
      id="modal-add"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              <b>Add Items</b>
            </h6>
            <button
              type="button"
              id="modalCloseButton"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              ref="refModalAdd"
              @click="closeModalAdd()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <data-table v-show="isModalTblVsbl" v-bind="mrfTable" />

            <div v-show="isModalCartVsbl" class="card-body">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <div class="col-12">
                    <img
                      src="../../../../public/dist/img/default-image.png"
                      class="product-image"
                      alt="Product Image"
                      style="height: 360px !important"
                    />
                  </div>
                  <div class="col-12 product-image-thumbs">
                    <div class="product-image-thumb">
                      <img
                        src="../../../../public/dist/img/default-image.png"
                        alt="Product Image"
                      />
                    </div>
                    <div class="product-image-thumb">
                      <img
                        src="../../../../public/dist/img/default-image.png"
                        alt="Product Image"
                      />
                    </div>
                    <div class="product-image-thumb">
                      <img
                        src="../../../../public/dist/img/default-image.png"
                        alt="Product Image"
                      />
                    </div>
                    <div class="product-image-thumb">
                      <img
                        src="../../../../public/dist/img/default-image.png"
                        alt="Product Image"
                      />
                    </div>
                    <div class="product-image-thumb">
                      <img
                        src="../../../../public/dist/img/default-image.png"
                        alt="Product Image"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <h3 class="my-3">{{ selectedItem.description }}</h3>
                  <hr />
                  <h6><b>Product Details</b></h6>

                  <div class="product-details">
                    <ul>
                      <li>
                        Item Code:
                        <span class="ml-2">
                          {{ selectedItem.item_code }}
                        </span>
                      </li>

                      <li>
                        Has Serial:
                        <span class="ml-2">
                          {{ selectedItem.has_serial }}
                        </span>
                      </li>
                      <li>
                        Category
                        <span class="ml-2">
                          {{ selectedItem.category }}
                        </span>
                      </li>
                      <li>
                        Sub Category:
                        <span class="ml-2">
                          {{ selectedItem.sub_category }}
                        </span>
                      </li>
                      <li>
                        Brand:
                        <span class="ml-2">
                          {{ selectedItem.brand }}
                        </span>
                      </li>
                      <li>
                        Qty on Hand:
                        <span class="ml-2">
                          {{ selectedItem.onhand }}
                        </span>
                      </li>
                      <li>
                        Sku:
                        <span class="ml-2">
                          {{ selectedItem.sku }}
                        </span>
                      </li>

                      <li class="mt-2">
                        <div class="row">
                          <div class="col-md-2 d-flex align-items-center">
                            UOM:
                          </div>

                          <div class="col-md-5">
                          <select
                            class="form-control form-control-sm"
                            v-model="selectedUom"
                          >
                            <option
                              :value="item"
                              v-for="item in uom"
                              :key="item.uom_id"
                            >
                              {{ item.uom_name }}
                            </option>
                          </select>
                          </div>
                        </div>
                      </li>

                      <li class="mt-2">
                        <div class="row">
                          <div class="col-md-2 d-flex align-items-center">
                            Quantity:
                          </div>
                          <div class="col-md-1"></div>
                          <div class="col-md-6">
                            <div
                              class="qty-wrapper d-flex flex-nowrap justify-content-start align-items-center"
                            >
                              <button
                                class="btn btn-sm btn-light"
                                style="width: 40px"
                                @click="qtyDecrease()"
                              >
                                -
                              </button>
                              <input
                                class="form-control form-control-sm p-0 text-center"
                                type="text"
                                style="max-width: 70px; background-color: white"
                                v-model="qty"
                                @input="validateQty($event)"
                              />

                              <button
                                class="btn btn-sm btn-light"
                                style="width: 40px"
                                @click="qtyIncrease"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <nav class="w-100">
                  <div class="nav nav-tabs" id="product-tab" role="tablist">
                    <a
                      class="nav-item nav-link active"
                      id="product-desc-tab"
                      data-toggle="tab"
                      href="#product-desc"
                      role="tab"
                      aria-controls="product-desc"
                      aria-selected="true"
                      >Description</a
                    >
                  </div>
                </nav>
                <div class="tab-content p-3" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="product-desc"
                    role="tabpanel"
                    aria-labelledby="product-desc-tab"
                  >
                    {{ selectedItem.specification }}
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /. modal-body -->

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success btn-sm"
              v-show="isModalCartVsbl"
              @click="addSelectedItem()"
            >
              <i class="fas fa-cart-plus mr-2"></i>Add Item
            </button>
          </div>
          <!-- ./ modal-footer -->
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.Modal Add-->
  </div>
  <!-- /. Container -->
</template>

<script>
import axios from "axios";
import VsToast from "@vuesimple/vs-toast";
import { ModelListSelect } from "vue-search-select";
import MrfCLarficationBtn from "../clarification/MrfClarificationBtn.vue";
export default {
  components: {
    ModelListSelect,
  },

  async created() {
    this.isLoading = true;

    await this.getMrf( this.$route.params.id, localStorage.getItem("companyId"), this.$route.params.frmName);
    await this.getReportingManager(localStorage.getItem("id"));
    await this.getProjects();
    await this. fetchUom();
    try {
      await this.$store.dispatch("sc/fetchAllSupplies",localStorage.getItem("companyId"));
      await this.setAllItems();
    } catch (error) {
      console.error(error);
      this.openToast(
        "top-right",
        "error",
        "Internal Server Error! Please inform the administrator!"
      );
    }

    this.isLoading = false;
  },
  watch: {
    counter() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    getSelectedSupply(newValue) {
      this.isModalTblVsbl = false,
      this.isModalCartVsbl = true,
      this.selectedItem = newValue;

      const uom = {
        uom_id: newValue.uom_id,
        uom_name: newValue.uom_name,
      };

      this.selectedUom = uom;
    },

    async $route(newRoute) {
      this.isLoading = true;

      await this.getMrf(newRoute.params.id,localStorage.getItem("companyId"),newRoute.params.id);
      await this.getReportingManager(localStorage.getItem("id"));
      await this.getProjects();
      await this. fetchUom();


      try {
        await this.$store.dispatch("sc/fetchAllSupplies",localStorage.getItem("companyId"));
        await this.setAllItems();
      } catch (error) {
        console.error(error);
        this.openToast(
          "top-right",
          "error",
          "Internal Server Error! Please inform the administrator!"
        );
      }

      this.isLoading = false;
    },

    typeListItem(newValue) {
      if (newValue.code !== this.typeListItemTemp.code) {
        this.processTypeListItem = {};
      }
      if (newValue.name === "Supplies Request - Internal") {
        this.isProcessTypeList = true;
      } else {
        this.isProcessTypeList = false;
      }
    },

    classListItem(newValue) {
      if (newValue?.code) {
        if (newValue.code >= 0 && newValue.code <= 3) {
          this.isTypeListDisabled = false;

          if (newValue.code !== this.classListItemTemp.code) {
            this.typeListItem = {};
            this.processTypeListItem = {};
          }

          if (newValue.code === 1) {
            this.typeList = [
              {
                code: 1,
                name: "Material Request - Project",
                type: "Project",
                process_type: "Sales Order",
              },
              {
                code: 2,
                name: "Material Request - Delivery",
                type: "Delivery",
                process_type: "Sales Order",
              },
              {
                code: 3,
                name: "Material Request - Demo",
                type: "Demo",
                process_type: "Sales Order",
              },
              {
                code: 4,
                name: "Material Request - POC",
                type: "POC",
                process_type: "Sales Order",
              },
            ];
            this.referenceNumber = "MRF";
          } else if (newValue.code === 2) {
            this.typeList = [
              {
                code: 5,
                name: "Asset Request - Project",
                type: "Project",
                process_type: "Sales Order",
              },
              {
                code: 6,
                name: "Asset Request - Delivery",
                type: "Deliver",
                process_type: "Sales Order",
              },
              {
                code: 7,
                name: "Asset Request - Demo",
                type: "Demo",
                process_type: "Sales Order",
              },
              {
                code: 8,
                name: "Asset Request - POC",
                type: "POC",
                process_type: "Sales Order",
              },
              {
                code: 9,
                name: "Asset Request - Internal",
                type: "Stocking",
                process_type: "Internal Process",
              },
            ];
            this.referenceNumber = "ARF";
          } else if (newValue.code === 3) {
            this.typeList = [
              {
                code: 10,
                name: "Supplies Request - Project",
                type: "Project",
                process_type: "Sales Order",
              },
              {
                code: 11,
                name: "Supplies Request - Internal",
                type: "Stocking",
                process_type: "",
              },
            ];
            this.referenceNumber = "SURF";
          }
        } else {
          this.typeListItem = {};
          this.processTypeListItem = {};
          this.isTypeListDisabled = true;
          this.referenceNumber = "RMA";
        }
      } else {
        this.typeListItem = {};
        this.processTypeListItem = {};
        this.isTypeListDisabled = true;
      }
    },

    costCenterItem(newValue) {
      if (newValue?.code) {
        if (newValue?.code === this.costCenterItemTemp.code) {
          this.getClient(newValue.code);
        } else {
          this.getClient(newValue.code);
          this.getAttachments(newValue.soid);
        }
      } else {
        this.mainId = this.clientId = this.clientName = "";
      }
    },
  },
  data() {
    return {
      counter: 0,
      isLoading: false,
      isLoadingModal: false,
      attemptNext: false,

      withdrawRemarks: "",

      // Request Details Card
      mrf_number: "",
      requestedDate: "",
      actualDeliveryDate: "",
      plannedDeliveryDate: "",
      mrfShortText: "",
      reportingManager: [],
      reportingManagerItem: {},
      costCenter: [],
      costCenterItem: {},
      costCenterItemTemp: {},
      clientName: "",
      clientId: "",
      mainId: "",
      remarks: "",

      department: "",
      full_name: "",
      date_requested: "",
      planned_delivery_date: "",
      actual_delivery_date: "",
      cost_center: "",
      materials_request_class: "",
      materials_request_type: "",

      // Attachments Card
      selectedFileSOF: [],
      selectedFileMRF: [],
      removedAttachedMRFFilesId: [],

      selectedFileNew: [],
      filespreviewNew: [],

      // Requested Items Card
      requested_items: [],

      all_items: [],

      // Logged User Data
      loggedUserId: localStorage.getItem("id"),
      loggedUserFirstName: localStorage.getItem("fname"),
      loggedUserLastName: localStorage.getItem("lname"),
      loggedUserFullName: localStorage.getItem("fullName"),
      loggedUserDepartment: localStorage.getItem("department"),
      loggedUserPosition: localStorage.getItem("positionName"),
      companyId: localStorage.getItem("companyId"),
      companyName: localStorage.getItem("companyName"),

      // To Delete Object
      toDeleteItem: null,

      // Step 2
      classList: [
        { code: 1, name: "Material Request" },
        { code: 2, name: "Asset Request" },
        { code: 3, name: "Supplies Request" },
        // { code: 4, name: "RMA Request" },
      ],
      classListItem: {},
      classListItemTemp: {},

      isProcessTypeList: false,
      processTypeList: [
        { code: 1, name: "Warehouse Supplies" },
        { code: 2, name: "Office Supplies" },
      ],
      processTypeListItem: {},

      isTypeListDisabled: true,
      typeList: [],
      typeListItem: {},
      typeListItemTemp: {},


      isModalTblVsbl: true,
      isModalCartVsbl: false,
      selectedItem: {
        abbrev: '',
        brand: '',
        brand_id: 0,
        category: '',
        category_id: 0,
        description: '',
        eol: '',
        has_serial: '',
        id: 0,
        item_code: '',
        onhand: '',
        replacement: '',
        sku: '',
        specification: '',
        sub_category: '',
        sub_category_id: 0,
        uom_id: 0,
        uom_name: '',
      },
      
      // Ito yung qty that can be increase and decrease
      qty: 1,
      previousQty: 1,


      // For modal uom options / dropdown
      uom: [],
      selectedUom: {},
    };
  },

  methods: {
    validateQty(event){
      const value = event.target.value;
      if (value === '') {
        this.qty = '';

      } else if (value.match(/^\d+(\.\d{0,2})?$/)) {

        
        this.qty = value; // Update the input value
        this.previousQty = value; // Update the previous valid value
      } else {
        // If the input value doesn't match the pattern, set it to the previous valid value
        this.qty = this.previousQty;
      }

    },

    qtyDecrease(){
      if (+this.qty > 0 && +this.qty >= 1.01) {
          this.qty = Math.max((this.qty - 1).toFixed(2), 0);
      } else {
        this.openToast(
          "top-right",
          "warning",
          "Quantity cannot be less than 1"
        );
      }
      
    },

    qtyIncrease(){
      this.qty++;
    },

    async fetchUom(){
      await this.$store.dispatch("sc/fetchUom");
      const uom = await this.$store.getters["sc/getUom"];
      this.uom = uom;

    },

    addSelectedItem(){
      this.openToast("top-right", "success", "Item added successfully!");
      const temporaryID = new Date().getTime();


      const selectedItem = {
        brand_id         : this.selectedItem.brand_id,
        brand_name       : this.selectedItem.brand,
        category_id      : this.selectedItem.category_id,
        category_name    : this.selectedItem.category,
        date_delivered   : null, // null
        description      : this.selectedItem.description,
        id               : this.selectedItem.id, // pk of material || setup_group_detail PK || here you can see duplicate of this
        item_code        : this.selectedItem.item_code,
        item_status      : "ACTIVE",
        notes            : "",
        order_qty        : +this.qty,
        req_dtls_id      : temporaryID, // PK ng requested_items under details|| requisition_details PK 
        sku              : this.selectedItem.sku,
        specification    : this.selectedItem.specification,
        sub_category_id  : this.selectedItem.sub_category_id,
        sub_category_name: this.selectedItem.sub_category,
        uom              : this.selectedUom.uom_name,
        uom_id           : this.selectedUom.uom_id,
      };
      


      this.requested_items.push(selectedItem);


      this.closeModalAdd();

// requested_items                              selectedItem

// brand_id: 43                                 brand_id
// brand_name: "Generic"                        brand
// category_id: 1                               category_id
// category_name: "Products"                    category
// date_delivered: null
// description: "G1028273"                      description
// id: 6408                                     id
// item_code: "G1028273"                        item_code
// item_status: "ACTIVE"
// notes: ""
// order_qty: 1                                 qty
// req_dtls_id: 28407
// sku: "G1028273"                              sku
// specification: "Lead Curtain, 32W x 29L"     specification
// sub_category_id: 4                           sub_category_id
// sub_category_name: "X-Ray Accessories"       sub_category
// uom: "pair(s)"                               uom_name
// uom_id: 5                                    uom_id


    },


    clearSCSelectedItems(){

    },

    closeModalAdd(){
      this.isModalTblVsbl  = true;
      this.isModalCartVsbl = false;

      this.qty = 1;
      this.previousQty = 1;
    },

    async setAllItems() {
      const supplies = await this.$store.getters["sc/getMrfSupplies"];
      this.all_items = supplies;
    },

    async getAllMaterials(companyId = 1) {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/get-all-materials/${companyId}`
        );

        // set all items
        this.all_items = resp.data.data;
      } catch (error) {
        console.error(error);
        this.openToast(
          "top-right",
          "error",
          "Internal Server Error! Please inform the administrator!"
        );
      }
    },

    previous() {
      this.counter--;
      this.attemptNext = false;
    },

    next() {
      this.attemptNext = true;

      if (this.counter === 0) {
        this.counter++;
      } else if (this.counter === 1) {
        if (
          !this.missingActualDeliveryDate &&
          !this.missingPlannedDeliveryDate &&
          !this.missingMrfShortText &&
          !this.missingReportingManager &&
          !this.missingCostCenterItem &&
          !this.missingRemarks
        ) {
          this.counter++;
        } else {
          this.openToast(
            "top-right",
            "warning",
            "Please complete required fields!"
          );
        }
      } else if (this.counter === 2) {
        this.counter++;
      }
    },

    isItDisabled(boolean) {
      if (boolean) return "padding: 9px; background-color: #e9ecef";
      else return "padding: 9px";
    },

    getClassListItem(name) {
      const obj = this.classList.find((current) => current.name === name);
      return obj;
    },

    getTypeListItem(name) {
      const typeList = [
        {
          code: 1,
          name: "Material Request - Project",
          type: "Project",
          process_type: "Sales Order",
        },
        {
          code: 2,
          name: "Material Request - Delivery",
          type: "Delivery",
          process_type: "Sales Order",
        },
        {
          code: 3,
          name: "Material Request - Demo",
          type: "Demo",
          process_type: "Sales Order",
        },
        {
          code: 4,
          name: "Material Request - POC",
          type: "POC",
          process_type: "Sales Order",
        },
        {
          code: 5,
          name: "Asset Request - Project",
          type: "Project",
          process_type: "Sales Order",
        },
        {
          code: 6,
          name: "Asset Request - Delivery",
          type: "Deliver",
          process_type: "Sales Order",
        },
        {
          code: 7,
          name: "Asset Request - Demo",
          type: "Demo",
          process_type: "Sales Order",
        },
        {
          code: 8,
          name: "Asset Request - POC",
          type: "POC",
          process_type: "Sales Order",
        },
        {
          code: 9,
          name: "Asset Request - Internal",
          type: "Stocking",
          process_type: "Internal Process",
        },
        {
          code: 10,
          name: "Supplies Request - Project",
          type: "Project",
          process_type: "Sales Order",
        },
        {
          code: 11,
          name: "Supplies Request - Internal",
          type: "Stocking",
          process_type: "",
        },
      ];

      const obj = typeList.find((current) => current.name === name);
      return obj;
    },

    getProcessTypeItem(name = "Office Supplies") {
      const obj = this.processTypeList.find((cur) => cur.name === name);
      return obj;
    },

    async getAttachments(soid) {

      const response = await fetch(
        `http://127.0.0.1:8000/api/get-attachments-by-soid/${soid}`,

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

      this.selectedFileSOF = responseData;
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

    async getProjects() {
      // const compid = this.companyId;

      const response = await fetch(
        `http://127.0.0.1:8000/api/general-getprojects/${localStorage.getItem(
          "companyId"
        )}`,

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

      // console.warn(responseData)

      const project = [];
      for (const key in responseData) {
        const request = {
          code: responseData[key].project_id,
          name: responseData[key].project_name,
          soid: responseData[key].SOID,
        };
        project.push(request);
      }
      this.costCenter = project;
    },

    // Query
    async getReportingManager(userid) {
      const response = await fetch(
        `http://127.0.0.1:8000/api/reporting-manager/${userid}`,
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
    },

    // Set because of confirm modal
    setToDeleteItem(id) {
      this.toDeleteItem = this.requested_items.findIndex((obj) => {
        return obj.req_dtls_id === id;
      });
    },

    deleteItem() {
      if (this.toDeleteItem >= 0 && this.toDeleteItem !== null) {
        this.requested_items.splice(this.toDeleteItem, 1);
        this.$refs.refModalCloseBtn.click();
        this.openToast("top-right", "success", "Item deleted successfully!");

        console.warn(this.toDeleteItem);
      }
    },

    async getMrf(id, companyId, frmname) {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/get-mrf/${id}/${companyId}/${frmname}`
        );



        const { materials_request_class, materials_request_type } =
          resp.data.request;

        const classListItem = this.getClassListItem(materials_request_class);
        this.classListItem = this.classListItemTemp = classListItem;

        const typeListItem = this.getTypeListItem(materials_request_type);

        this.typeListItem = this.typeListItemTemp = typeListItem;

        const [{ procss_type }] = resp.data.req_main;

        this.processTypeListItem = this.getProcessTypeItem(procss_type);

        // Request Details Card
        this.mrf_number = resp.data.request.mrf_number;
        this.requestedDate = resp.data.request.date_requested;
        this.actualDeliveryDate = resp.data.request.planned_delivery_date;
        this.plannedDeliveryDate = resp.data.request.planned_delivery_date;
        this.mrfShortText = resp.data.request.mrf_short_text;
        const { rm_id, rm_name } = resp.data.user;

        this.reportingManagerItem = {
          code: rm_id,
          name: rm_name,
        };

        this.department = resp.data.user.department;
        this.full_name = resp.data.user.fullname;
        this.reporting_manager = resp.data.user.rm_name;
        const { project_id, project_name } = resp.data.request;

        this.costCenterItemTemp = this.costCenterItem = {
          code: project_id,
          name: project_name,
        };

        this.client_name = resp.data.request.client_name;
        this.materials_request_class =
          resp.data.request.materials_request_class;
        this.materials_request_type = resp.data.request.materials_request_type;
        this.remarks = resp.data.request.remarks;

        // Attachments Card
        this.selectedFileSOF = resp.data.attachmentsSOF;
        this.selectedFileMRF = resp.data.attachmentsMRF;

        // Requested Items Card
        this.requested_items = resp.data.request.requisition_details;
        console.warn(resp.data.request.requisition_details);
      } catch (err) {
        // Handle Error Here
        console.error(err);
        this.openToast(
          "top-right",
          "error",
          "Internal Server Error! Please inform the administrator!"
        );
      }
    },

    close() {
      this.$router.replace("/clarifications");
    },

    async withdrawn() {
      const fd = new FormData();
      const frmClass = this.$route.params.frmClass;
      const reqId = this.$route.params.id;
      const form = this.$route.params.frmName;

      fd.append("loggedUserId", localStorage.getItem("id"));
      fd.append("loggedUserFirstName", localStorage.getItem("fname"));
      fd.append("loggedUserLastName", localStorage.getItem("lname"));
      fd.append("loggedUserDepartment", localStorage.getItem("department"));
      fd.append("loggedUserPosition", localStorage.getItem("positionName"));
      fd.append("companyId", localStorage.getItem("companyId"));
      fd.append("companyName", localStorage.getItem("companyName"));

      fd.append("frmClass", frmClass);
      fd.append("processId", reqId);
      fd.append("frmClass", form);
      fd.append("withdrawRemarks", this.withdrawRemarks);

      try {
        const resp = await axios.post(
          "http://127.0.0.1:8000/api/mrf-withdraw",
          fd
        );

        this.openToast("top-right", "success", resp.data.message);
        document.getElementById("modalCloseButton").click();
        this.$router.replace("/inprogress");
      } catch (err) {
        // Handle Error Here
        console.error(err);

        this.openToast(
          "top-right",
          "error",
          "Internal Server Error! Please inform the administrator!"
        );
      }
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

    // ATTACHMENTS

    // remove existing attached files
    removeAttachedFile(index, id, filename, filepath) {
      const attachmentId = { id: id, filename: filename, filepath: filepath };
      this.removedAttachedMRFFilesId.push(attachmentId);
      this.selectedFileMRF.splice(index, 1);
    },

    // Add new files scripts
    onFileSelected(event) {
      let selectedFiles = event.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        this.selectedFileNew.push(selectedFiles[i]);
      }
      this.setFilePreviewNew();
    },

    onInputChange(event) {
      let selectedFiles = event.dataTransfer.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        this.selectedFileNew.push(selectedFiles[i]);
      }
      this.setFilePreviewNew();
    },

    // preview function of newly added files
    filePreviewNew(i) {
      // console.log(i)
      const url = this.filespreviewNew[i].link;
      window.open(url, "_blank", "resizable=yes");
    },

    // set a preview function for newly added files
    setFilePreviewNew() {
      let files = this.selectedFileNew;
      const fileContainer = [];
      for (let i = 0; i < files.length; i++) {
        let tmppath = URL.createObjectURL(files[i]);
        const thisFiles = {
          link: tmppath,
        };
        fileContainer.push(thisFiles);
      }
      this.filespreviewNew = fileContainer;
    },

    // remove newly added files
    removeFileNew(i) {
      this.selectedFileNew.splice(i, 1);
      this.setFilePreviewNew();
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
  },

  computed: {
    mrfTable() {
      return {
        data: this.all_items,
        perPageSizes: [
          10,
          25,
          50,
          100,
          100 * Math.ceil(this.all_items.length / 100),
        ],

        tableClass:
          "table table-sm table-striped table-bordered small table-hover",
        columns: [
          {
            key: "Action Button",
            sortable: false,
            component: MrfCLarficationBtn,
          },
          {
            key: "item_code",
            title: "Item Code",
          },
          {
            key: "brand",
            title: "Brand",
          },
          {
            key: "sku",
            title: "SKU",
          },
          {
            key: "specification",
            title: "Model",
          },
          {
            key: "description",
            title: "Item Description",
          },
          {
            key: "onhand",
            title: "Qty On Hand",
          },
          {
            key: "uom_name",
            title: "UOM",
          },
          {
            key: "category",
            title: "Category",
          },
          {
            key: "sub_category",
            title: "Sub Category",
          },
        ],
      };
    },

    getSelectedSupply() {
      return this.$store.getters["sc/getSelectedSupply"];
    },

    isTypeDisabled() {
      if (!(this.classListItem?.code === undefined)) {
        return "padding: 9px";
      } else {
        return "padding: 9px; background-color: #e9ecef";
      }
    },

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

    missingClass() {
      if (this.classListItem?.code === undefined) {
        return true;
      } else {
        return false;
      }
    },

    missingType() {
      if (this.typeListItem?.code === undefined) {
        return true;
      } else {
        return false;
      }
    },

    missingProcessType() {
      if (this.processTypeListItem?.code === undefined) {
        return true;
      } else {
        return false;
      }
    },

    missingActualDeliveryDate() {
      if (this.actualDeliveryDate === null) {
        return true;
      } else {
        return false;
      }
    },

    missingPlannedDeliveryDate() {
      if (this.plannedDeliveryDate === null) {
        return true;
      } else {
        return false;
      }
    },

    missingMrfShortText() {
      return this.mrfShortText.length === 0 ? true : false;
    },

    missingReportingManager() {
      if (this.reportingManagerItem.code === undefined) {
        return true;
      } else {
        return false;
      }
    },

    missingCostCenterItem() {
      if (this.costCenterItem.code === undefined) {
        return true;
      } else {
        return false;
      }
    },

    missingRemarks() {
      if (this.remarks === undefined || this.remarks == "") return true;
      return false;
    },
  },
};
</script>

<style scoped>
.anyClass {
  min-height: 30px;
  max-height: 500px;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 7px;
}

.scroll-bar::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.scroll-bar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.scroll-bar::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.scroll-bar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

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

#uploadContainer {
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

.formInvalid {
  background-color: #fff6f6;
  border-color: #e0b4b4;
}

.glowing-border {
  /* border: 2px solid #e0b4b4; */
  outline: none;
  box-shadow: 0 0 13px #e0b4b4;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.ellipsis-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card--details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  line-height: 1.3;
}

.card--details li .light {
  color: #9ca3af;
}

.card--details li .dark {
  color: #050505;
  margin-left: 5px;
}

.overlay__card-body {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  text-align: center;
  position: absolute;

  z-index: 999;

  top: 0; /* Position Y halfway in */
  left: 0; /* Position X halfway in */

  width: 100%;
  height: 100%;
}

.overlay__card-body-con {
  position: relative;
}

.gap-2 {
  gap: 20px;
}

.card--img {
  align-self: center;
}

/* Modal Cart design */

.product-details ul {
  padding-left: 0px;
  color: #a9a399 !important;
}

.product-details ul li {
  list-style: none;
}

.product-details ul li span {
  color: #212529 !important;
}
</style>