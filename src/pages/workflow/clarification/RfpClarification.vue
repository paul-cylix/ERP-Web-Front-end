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
        <h3 class="card-title">Request for Payment</h3>
      </div>
      <div class="card-body">
        <!-- Step Numbers -->
        <div class="d-flex progressBarWrapper text-center">
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
          <div class="progressbar" :class="classE" v-if="isLiquidation">
            <span :class="classE">5</span>
          </div>
        </div>

        <div class="d-flex text-center">
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
                >Payment Details</span
              ></small
            >
          </div>

          <div class="textbar" :class="classC" v-if="!isLiquidation">
            <small
              ><span :class="classC" class="font-weight-bold"
                >Attachments</span
              ></small
            >
          </div>
          <div class="textbar" :class="classD" v-if="!isLiquidation">
            <small
              ><span :class="classD" class="font-weight-bold"
                >Review</span
              ></small
            >
          </div>

          <div class="textbar" :class="classC" v-if="isLiquidation">
            <small
              ><span :class="classC" class="font-weight-bold"
                >Liquidation</span
              ></small
            >
          </div>
          <div class="textbar" :class="classD" v-if="isLiquidation">
            <small
              ><span :class="classD" class="font-weight-bold"
                >Attachments</span
              ></small
            >
          </div>
          <div class="textbar" :class="classD" v-if="isLiquidation">
            <small
              ><span :class="classD" class="font-weight-bold"
                >Review</span
              ></small
            >
          </div>
        </div>
        <!-- / Step Numbers -->

        <!-- Main Form -->

        <!-- Request Details -->
        <aside v-if="this.counter === 0">
          <div class="row mt-4">
            <div class="col-md-3">
              <div class="form-group">
                <small><label for="reference">Reference Number</label></small>
                <input
                  type="text"
                  class="form-control form-control-sm py-3"
                  id="reference"
                  disabled
                  v-model="referenceNumber"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small><label for="requestDate">Request Date</label></small>
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
                <small><label for="dateNeeded">Date Needed</label></small>
                <date-picker
                  v-model="dateNeeded"
                  valueType="format"
                  style="display: block; width: 100%; line-height: 20px"
                  v-if="strictInitAndLiquidation"

                ></date-picker>
                
                
                <input
                  type="text"
                  disabled
                  class="form-control py-3 form-control-sm"
                  id="dateNeeded"
                  v-model="dateNeeded"
                  v-else
                />

          
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small
                  ><label for="reportingManager selextForm" id="selextForm"
                    >Reporting Manager</label
                  ></small
                >
                <!-- <input
                  type="text"
                  class="form-control py-3 form-control-sm"
                  disabled
                  v-model="reportingManager"
                  id="reportingManager"
                /> -->
                <model-list-select
                  :list="reportingManager"
                  v-model="reportingManagerItem"
                  option-value="code"
                  option-text="name"
                  placeholder="select item"
                  style="padding: 9px"
                  v-if="strictInitAndLiquidation"
                >
                </model-list-select>

                <input
                  v-else
                  type="text"
                  class="form-control py-3 form-control-sm"
                  disabled
                  v-model="reportingManagerItem.name"
                  id="reportingManager"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="projectName">Project Name</label></small>

                <model-list-select
                  :list="project"
                  v-model="projectItem"
                  option-value="code"
                  option-text="name"
                  placeholder="select item"
                  style="padding: 9px"
                  v-if="strictInitAndLiquidation"
                >
                </model-list-select>

                <input
                  v-else
                  type="text"
                  class="form-control py-3 form-control-sm"
                  disabled
                  v-model="projectItem.name"
                  id="projectName"
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <small><label for="clientName">Client Name</label></small>
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
            <div class="col-md-12">
              <div class="form-group">
                <small><label for="purpose">Purpose</label></small>
                <!-- <textarea class="form-control" name="purpose" id="purpose" :value="message" @input="updateMessage"  rows="5"></textarea> -->
                <textarea
                  class="form-control"
                  name="purpose"
                  id="purpose"
                  v-model="purpose"
                  rows="5"
                 v-if="strictInitAndLiquidation"
                ></textarea>

                <textarea
                  class="form-control"
                  name="purpose"
                  id="purpose"
                  disabled
                  v-model="purpose"
                  rows="5"
                 v-else
                ></textarea>

              </div>
            </div>
          </div>
        </aside>
        <!-- / Request Details -->

        <!-- Payment Details -->
        <div class="row mt-4" v-else-if="this.counter === 1">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="form-group">
              <small><label for="payeeName">Payee Name</label></small>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="payeeName"
                id="payeeName"
                v-if="strictInitAndLiquidation"
              />

              <input
                type="text"
                class="form-control form-control-sm"
                v-model="payeeName"
                disabled
                id="payeeName"
                v-else
              />


            </div>
            <div class="form-group">
              <small><label for="modeOfPayment">Mode of Payment</label></small>
              <model-list-select
                :list="modeOfPayment"
                v-model="modeOfPaymentItem"
                option-value="code"
                option-text="name"
                placeholder="select item"
                style="padding: 9px"
                v-if="strictInitAndLiquidation"
              >
              </model-list-select>

              <input
                v-else
                type="text"
                v-model="modeOfPaymentItem.name"
                disabled
                class="form-control form-control-sm"
                id="modeOfPayment"
              />
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="currency">Currency</label></small>

                  <model-list-select
                    :list="currency"
                    v-model="currencyItem"
                    option-value="code"
                    option-text="name"
                    placeholder="select item"
                    style="padding: 9px"
                    v-if="strictInitAndLiquidation"
                  >
                  </model-list-select>

                  <input
                    v-else
                    type="text"
                    disabled
                    v-model="currencyItem.name"
                    class="form-control form-control-sm"
                    id="currency"
                  />
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <small><label for="amount">Amount</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    id="amount"
                    v-model="amount"
                    v-if="strictInitAndLiquidation"
                  />

                    <input
                    v-else
                    type="text"
                    class="form-control form-control-sm py-3"
                    id="amount"
                    v-model="amount"
                    :disabled="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
        <!-- / Payment Details -->

        <!-- Liquidation -->
        <div class="row mt-4" v-if="this.counter === setLiq">

          <!-- Read only Liquidation -->
          <table class="table table-sm table-bordered table-striped mx-2">
            <thead>
              <tr>
                <th colspan="7" scope="col">
                  <aside class="d-flex align-items-center">
                    <span class="mb-1 ml-1"> Liquidation Table</span>
                  </aside>
                </th>
                <th v-if="isInitiatorAndLiquidation">
                  <aside class="text-center">
                    <button
                      class="btn btn-sm btn-success m-0"
                      data-toggle="modal"
                      data-target="#modal-liquidation"
                      @click="setButton()"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </aside>
                </th>
              </tr>

              <tr>
                <th scope="col" class="text-center">#</th>
                <th scope="col">Date</th>
                <th scope="col">Client Name</th>
                <th scope="col">Expense Type</th>
                <th scope="col">Description</th>
                <th scope="col">Currency</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody style="font-size: 14px">
              <tr v-for="(item, index) in liquidation" :key="item.id">
                <td class="text-center">{{ index + 1 }}.</td>
                <td>{{ item.trans_date }}</td>
                <td>{{ item.client_name }}</td>
                <td>{{ item.expense_type }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.currency }}</td>
                <td>{{ item.Amount }}</td>
                <td class="pl-0 m-0" v-if="isInitiatorAndLiquidation">
                  <aside class="d-flex justify-content-center">
                    <button
                      class="btn btn-sm btn-info m-0"
                      @click="edit(liquidation.indexOf(item))"
                      data-toggle="modal"
                      data-target="#modal-liquidation"
                    >
                      <i class="fas fa-edit"></i>
                    </button>
                    <button
                      class="btn btn-sm btn-danger m-0 ml-1"
                      @click="trash(liquidation.indexOf(item))"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </aside>
                </td>
              </tr>
              <tr>
                <td colspan="6"></td>
                <td colspan="2">
                  <b>Total Amount: {{ this.totalAmount }}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- / Liquidation -->

        <!-- The Attachments -->
        <div
          v-if="this.counter === setAttach"
          class="
            d-flex
            align-items-center
            justify-content-center
            text-center
            position-relative
            mt-4
          "
          id="app"
        >
          <input v-if="isInitiator"
            type="file"
            multiple
            name="fields[assetsFieldHandle][]"
            id="assetsFieldHandle"
            class="w-25 h-25 overflow-hidden"
            @change="onFileSelected"
            ref="file"
            accept=".pdf,.jpg,.jpeg,.png"
          />

          <div class="p-5 col-md-12 rounded" id="uploadContainer">
            <label for="assetsFieldHandle" class="block cursor-pointer">
              <span v-if="isInitiator" class="text-secondary">Click here to add new file(s)</span>
              <span v-else class="text-secondary">List of Attached file(s)</span>
            </label>
            <!-- <aside class="d-flex align-items-center justify-content-center"> -->
            <ul class="mt-4 text-decoration-none ulUpload">
              <li
                class="text-sm mt-2"
                v-for="(file, index) in selectedFile"
                :key="file.newFilename"
              >
                <div class="row d-flex justify-content-center">
                  <div class="col-md-4 d-flex">
                    <div class="col-1">
                      <b>{{ index + 1 + "." }}</b>
                    </div>
                    <div class="col text-left">
                      <span>{{ file.filename }}</span>
                    </div>

                    <div v-if="isInitiator">
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

                    <div class="col-2">
                      <button
                        class="btn btn-secondary btn-sm"
                        @click="preview(file.mimeType, file.imageBytes)"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </li>

              <!-- Newly added file -->
              <li
                class="text-sm mt-2"
                v-for="(file, index) in selectedFileNew"
                :key="file.index"
              >
                <div class="row d-flex justify-content-center">
                  <div class="col-md-4 d-flex">
                    <div class="col-1">
                      <b>{{ index + 1 }}.</b>
                    </div>
                    <div class="col text-left">
                      <span>{{ file.name }}</span>
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
                    <div class="col-2">
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
            </ul>

            <!-- </aside> -->
          </div>
        </div>
        <!-- / The Attachments -->

        <!--  Form Review -->
        <aside v-if="this.counter >= setReview">
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
                <!-- <thead>
          <tr>
            <th>Form</th>
            <th style="width: 80%"></th>
          </tr>
        </thead> -->
                <tbody>
                  <tr>
                    <td>Reference Number</td>
                    <td style="width: 80%">{{ this.referenceNumber }}</td>
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

          <!-- Liquidation Review -->
          <div class="card card-secondary" v-if="isLiquidation">
            <div class="card-header">
              <h3 class="card-title">Liquidation</h3>

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
                    <th style="width: 15%">Expense Type</th>
                    <th style="width: 30%">Description</th>
                    <th style="width: 10%">Currency</th>
                    <th style="width: 15%">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in liquidation" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.trans_date }}</td>
                    <td>{{ item.client_name }}</td>
                    <td>{{ item.expense_type }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.currency }}</td>
                    <td>{{ item.Amount }}</td>
                  </tr>

                  <tr>
                    <td colspan="6"></td>
                    <b class="px-1">Total: {{ this.totalAmount }}</b>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.Liquidation Review -->

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
                    <th style="width: 5%">#</th>
                    <th style="width: 80%">Filename</th>
                    <th style="width: 15%">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(file, index) in selectedFile"
                    :key="file.id"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ file.filename }}</td>
                    <td class="pl-2 pr-2 text-center">
                      <button
                        v-if="isInitiator"
                        class="btn btn-danger btn-sm"
                        @click="
                          removeAttachedFile(
                            index,
                            file.id,
                            file.filename,
                            file.filepath
                          )
                        "
                      >
                        Remove
                      </button>

                      <button
                        class="btn btn-secondary btn-sm ml-1"
                        @click="preview(file.mimeType, file.imageBytes)"
                      >
                        Preview
                      </button>
                    </td>
                  </tr>
                  <tr
                    v-for="(file, index) in selectedFileNew"
                    :key="file.index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ file.name }}</td>
                    <td class="pl-2 pr-2 text-center">
                      <button
                        @click="removeFileNew(selectedFileNew.indexOf(file))"
                        class="btn btn-danger btn-sm"
                        v-if="isInitiator"
                      >
                        Remove
                      </button>

                      <button
                        class="btn btn-secondary btn-sm ml-1"
                        @click="filePreviewNew(selectedFileNew.indexOf(file))"
                      >
                        Preview
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </aside>
        <!-- / Form Review -->

        <!-- / Main Form -->

        <!-- Button -->
        <div class="row d-flex justify-content-between mt-3">
          <aside class="col-lg-6 d-flex justify-content-start">
            <div class="col-lg-2" v-show="counter">
              <button
                type="button"
                @click="counter--"
                class="btn btn-block btn-secondary btn-sm"
              >
                Previous
              </button>
            </div>
            <div
              class="col-lg-2"
              v-show="!isLiquidation"
              v-if="this.counter <= 2"
            >
              <button
                type="button"
                @click="counter++"
                class="btn btn-block btn-primary btn-sm"
              >
                Next2
              </button>
            </div>

            <div
              class="col-lg-2"
              v-show="isLiquidation"
              v-if="this.counter <= 3"
            >
              <button
                type="button"
                @click="counter++"
                class="btn btn-block btn-primary btn-sm"
              >
                Next3
              </button>
            </div>
          </aside>

          <aside class="col-lg-6 d-flex justify-content-end">
            <div class="col-lg-2">
              <button
                type="button"
                class="btn btn-block btn-warning btn-sm"
                data-toggle="modal"
                data-target="#modal-default"
              >
                Reply
              </button>
            </div>

            <div class="col-lg-2">
              <button
                type="button"
                class="btn btn-block btn-danger btn-sm"
                @click="close()"
              >
                Close
              </button>
            </div>
          </aside>
        </div>
        <!-- / Button -->
      </div>
    </div>
    <!-- /.card -->

    <!-- Modal -->
    <div class="modal fade" id="modal-default">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Overlay Loading Spinner -->
          <div class="overlay" v-show="isLoadingModal">
            <i class="fas fa-2x fa-sync fa-spin"></i>
          </div>

          <div class="modal-header">
            <h6 class="modal-title"><b>Reply Message</b></h6>
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
                  <small><label for="remarks">Remarks</label></small>
                  <textarea
                    class="form-control"
                    id="remarks"
                    rows="5"
                    v-model="remarks"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-end">
            <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
            <button
              type="button"
              class="btn btn-primary btn-sm"
              @click="reply()"
            >
              Reply
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- Modal Liquidation-->
    <div class="modal fade" id="modal-liquidation">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              <b>Liquidation</b>
            </h6>
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
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="reference">Date</label></small>

                  <date-picker
                    valueType="format"
                    style="display: block; width: 100%; line-height: 20px"
                    v-model="modalDate"
                  ></date-picker>
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <small><label for="projectName">Project Name</label></small>
                  <!-- <input type="text" class="form-control py-3 form-control-sm" id="projectName"> -->
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
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="projectName">Expense Type</label></small>

                  <model-list-select
                    :list="modalExpenseType"
                    v-model="itemmodalExpenseType"
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
                  <small><label for="projectName">Currency Type</label></small>

                  <model-list-select
                    :list="modalCurrency"
                    v-model="itemmodalCurrency"
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
                  <small><label for="modalamount">Amount</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    id="modalamount"
                    v-model="modalamount"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="remarks"
                    rows="5"
                    v-model="modalremarks"
                    placeholder="Please input request remarks here!"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-end">
            <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
            <button
              v-if="isButton"
              type="button"
              class="btn btn-success btn-sm"
              @click="insert()"
            >
              Insert
            </button>

            <button
              v-else
              type="button"
              class="btn btn-success btn-sm"
              @click="update()"
            >
              Update
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
  </div>
</template>

<script>
import axios from "axios";
import VsToast from "@vuesimple/vs-toast";
import { ModelListSelect } from "vue-search-select";
export default {
  components: {
    ModelListSelect,
  },
  watch: {
    // Request Details
    projectItem(newValue) {
      this.getClient(newValue.code);
    },

    // go to top page when changing steps
    counter() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    //Navigate
    $route(newRoute) {
      this.showRfpMain(this.$route.params.id);
      this.showRfpDetail(this.$route.params.id);
      this.showRfpAttachments(this.$route.params.id, "Request for Payment");
      this.counter = 0;
      this.remarks = "";
      console.log(newRoute);
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

    setLiq() {
      if (this.isLiquidation === true) {
        return 2;
      } else {
        return false;
      }
    },

    setAttach() {
      if (this.isLiquidation === true) {
        return 3;
      } else {
        return 2;
      }
    },

    setReview() {
      if (this.isLiquidation === true) {
        return 4;
      } else {
        return 3;
      }
    },

    // Calendaer
    todaysYear() {
      const today = new Date();
      const yyyy = today.getFullYear();
      return yyyy;
    },

    todaysDate() {
      const today = new Date();
      const dd = today.getDate();
      const mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      const todaysDate = yyyy + "-" + mm + "-" + dd;
      return todaysDate;
    },

    totalAmount() {
      const total = this.liquidation
        .map((liquidation) => parseInt(liquidation.Amount))
        .reduce((acc, liquidation) => liquidation + acc);
      if (total) {
        return total;
      } else {
        return 0;
      }
    },

    isInitiatorAndLiquidation() {
      return this.isLiquidation && this.isInitiator;
    },

    strictInitAndLiquidation(){
        let x;
        x = this.isLiquidation
        x = !x
        let y = this.isInitiator
        const z = y && x
        return z

    }
  },
  data() {
    return {
      counter: 0,
      // Request Details
      referenceNumber: "",
      requestDate: "",
      dateNeeded: "",
      // reportingManager: "",
      reportingManager: [],
      reportingManagerItem: {},
      project: [],
      projectItem: {},

      projectName: "",
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
      modeOfPaymentItem: {},
      payeeName: "",
      // modeOfPayment: "",
      currency: [
        { code: "PHP", name: "PHP" },
        { code: "AUD", name: "AUD" },
        { code: "CAD", name: "CAD" },
        { code: "EUR", name: "EUR" },
        { code: "USD", name: "USD" },
      ],
      currencyItem: {},
      amount: "",

      // The Attachments
      selectedFile: [],
      // filespreview: "",
      removedAttachedFilesId: [],

      // newly added attachments
      selectedFileNew: [],

      // reply Modal
      remarks: "",

      isLoading: false,
      isLoadingModal: false,

      isInitiator: false,
      isLiquidation: false,

      // User Details
      processId: this.$route.params.id,
      form: "Request for Payment",

      // Logged User Data // initiator
      loggedUserId: 136,
      loggedUserFirstName: "Rosevir",
      loggedUserLastName: "Ceballos",
      loggedUserFullName: "Rosevir Ceballos Jr.",
      loggedUserDepartment: "Information Technology",
      loggedUserPosition: "Senior Developer",
      companyId: 1,
      companyName: "Cylix Technologies Inc.",

      // approver
      // loggedUserId: 11,
      // loggedUserFirstName: "Konrad",
      // loggedUserLastName: "Chua",
      // loggedUserFullName: "Konrad Chua",
      // loggedUserDepartment: "Management",
      // loggedUserPosition: "Managing Director",
      // companyId: 1,
      // companyName: "Cylix Technologies Inc.",


      // // approver 2
      // loggedUserId: 12,
      // loggedUserFirstName: "Carrie",
      // loggedUserLastName: "Chua Lee",
      // loggedUserFullName: "Carrie Chua Lee",
      // loggedUserDepartment: "Accounting and Finance",
      // loggedUserPosition: "Accounting and Finance Head",
      // companyId: 1,
      // companyName: "Cylix Technologies Inc.",





      // switch button in liquidation part
      isButton: true,

      // use in liquidation CRUD
      i: 0,

      liquidation: [],
      editliquidation: [],

      modalDate: "",
      modalclient: [],
      itemclientName: {},

      modalCurrency: [],
      itemmodalCurrency: {},

      modalExpenseType: [],
      itemmodalExpenseType: {},

      modalamount: "",

      modalremarks: "",
    };
  },

  created() {
    // console.log(this.$route.params.id);
    // this.showRfpMain(this.$route.params.id);
    // this.showRfpDetail(this.$route.params.id);
    // this.showRfpAttachments(this.$route.params.id, "Request for Payment");

    this.getRfpClarification(
      this.$route.params.id,
      this.$route.params.frmName,
      this.companyId
      // this.loggedUserId
    );

    // use for liquidation
    this.getBusinesses();
    this.getcurrencyName();
    this.getexpenseType();
    this.getLiquidation(this.$route.params.id);
    this.getReportingManager(this.loggedUserId);
    this.getProjects();
    this.getAttachments(this.$route.params.id, this.$route.params.frmName);

    // this.getRfpClarification(this.$route.params.id, "Request for Payment",136);
  },

  methods: {
    getRfpClarification(id, form, companyId) {
      // getRfpClarification(id, form,loggedUserId) {
      this.isLoading = true;
      let showRfpMain = `http://127.0.0.1:8000/api/rfp-main/${id}`;
      let showRfpDetail = `http://127.0.0.1:8000/api/rfp-main-detail/${id}`;
      // let showRfpAttachments = `http://127.0.0.1:8000/api/getRfpAttachments/${id}/${form}`;
      let showActualSign = `http://127.0.0.1:8000/api/general-actual-sign/${id}/${form}/${companyId}`;
      // let showLiquidation = `http://127.0.0.1:8000/api/rfp-main-liquidation/${id}`;
      // let showReportingManager = `http://127.0.0.1:8000/api/reporting-manager/${loggedUserId}`;
      // let showProjects = `http://127.0.0.1:8000/api/general-projects`;

      const requestOne = axios.get(showRfpMain);
      const requestTwo = axios.get(showRfpDetail);
      // const requestThree = axios.get(showRfpAttachments);
      const requestFour = axios.get(showActualSign);
      // const requestFive = axios.get(showLiquidation);
      // const requestSix = axios.get(showReportingManager);
      // const requestSeven = axios.get(showProjects);

      axios
        .all([
          requestOne,
          requestTwo,
          // requestThree.catch(() => null),
          requestFour,
          // requestFive.catch(() => null),
          // requestSix,
          // requestSeven,
        ])

        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];
            // const responesThree = responses[2];
            const responesFour = responses[2];
            // const responesFive = responses[4];
            // const responesSix = responses[5];
            // const responesSeven = responses[6];

            // showRfpMain - responseOne
            this.referenceNumber = responseOne.data.data.REQREF;
            this.requestDate = responseOne.data.data.DATE;
            this.dateNeeded = responseOne.data.data.Deadline;
            // this.reportingManager = responseOne.data.data.REPORTING_MANAGER;
            this.amount = responseOne.data.data.AMOUNT;
            this.uid = responseOne.data.data.UID;

            if (responseOne.data.data.UID === this.loggedUserId) {
              this.isInitiator = true;
              this.counter = 0;
            } else {
              this.isInitiator = false;
            }
            // console.log(responseOne)

            // showRfpDetail - responseTwo
            this.projectName = responseTwo.data.data.PROJECT;
            this.clientName = responseTwo.data.data.CLIENTNAME;
            this.purpose = responseTwo.data.data.PURPOSED;
            this.payeeName = responseTwo.data.data.PAYEE;
            // this.currency = responseTwo.data.data.CURRENCY;
            // this.modeOfPayment = responseTwo.data.data.MOP;
            const currencyItem = {
              code: responseTwo.data.data.CURRENCY,
              name: responseTwo.data.data.CURRENCY,
            };
            this.currencyItem = currencyItem;
            const modeOfPaymentItem = {
              code: responseTwo.data.data.MOP,
              name: responseTwo.data.data.MOP,
            };
            this.modeOfPaymentItem = modeOfPaymentItem;

            // showRfpAttachments - responesThree
            // this.selectedFile = responesThree.data.data;

            //showActualSign - responesFour
            const reportingManagerItem = {
              code: responesFour.data[2].RM_ID,
              name: responesFour.data[2].REPORTING_MANAGER,
            };
            this.reportingManagerItem = reportingManagerItem;

            // console.log(reportingManagerItem)

            const projectItem = {
              code: responesFour.data[0].PROJECTID,
              name: responesFour.data[0].PROJECT,
            };
            this.projectItem = projectItem;

            // console.log(projectItem)
            // console.log('test')

            if (responesFour.data[2].STATUS === "Completed") {
              console.log("liquidation is true");
              this.isLiquidation = true;
            } else {
              // alert('false')
              console.log("liquidation is false");
              this.isLiquidation = false;
            }
            // showLiquidation - responesFive
            // console.log(responesFive);
            // this.liquidation = responesFive.data;

            // console.log('sad')

            // showReportingManager - responesSix
            // const reportingManager = [];
            // for (const key in responesSix.data) {
            //   const request = {
            //     code: responesSix.data[key].RMID,
            //     name: responesSix.data[key].RMName,
            //   };
            //   reportingManager.push(request);
            // }
            // this.reportingManager = reportingManager;

            // console.log(responesSix.data);

            // showProjects - responesSeven
            // console.log(responesSeven);

            // const projects = [];
            // for (const key in responesSeven.data) {
            //   const request = {
            //     code: responesSeven.data[key].project_id,
            //     name: responesSeven.data[key].project_name,
            //   };
            //   projects.push(request);
            // }
            // this.project = projects;
          })
        )
        .catch((errors) => {
          // react on errors.
          console.log(errors);
        })
        .then(() => {
          this.isLoading = false;
        });
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

    openToast(position, variant, message) {
      const toastTitle = variant.charAt(0).toUpperCase() + variant.slice(1);
      VsToast.show({
        title: `${toastTitle}`,
        message: `${message}`,
        variant,
        position,
      });
    },

    reply() {
      this.isLoadingModal = true;
      // console.log(this.dateNeeded)
      // console.log(this.reportingManagerItem.code)
      // console.log(this.reportingManagerItem.name)
      // console.log(this.projectItem.code)
      // console.log(this.projectItem.name)
      // console.log(this.clientName)
      // console.log(this.clientId)
      // console.log(this.mainId)
      // console.log(this.purpose)

      // console.log(this.payeeName)
      // console.log(this.modeOfPaymentItem.name)
      // console.log(this.currencyItem.name)
      // console.log(this.amount)

      // console.log(this.removedAttachedFilesId)
      // console.log(this.remarks)
      // console.log(this.processId)
      // console.log(this.form)
      // console.log(this.loggedUserId)
      // console.log(this.loggedUserFullName)
      // console.log(this.companyId)
      // console.log(this.companyName)

      const fd = new FormData();
      for (let i = 0; i < this.selectedFileNew.length; i++) {
        fd.append("file[]", this.selectedFileNew[i]);
      }

      fd.append("referenceNumber", this.referenceNumber);
      fd.append("processId", this.processId);
      fd.append("form", this.form);
      fd.append("loggedUserId", this.loggedUserId);
      fd.append("remarks", this.remarks);
      fd.append("loggedUserFullName", this.loggedUserFullName);
      fd.append("dateNeeded", this.dateNeeded);
      fd.append("amount", this.amount);
      fd.append("reportingManagerName", this.reportingManagerItem.name);
      fd.append("companyId", this.companyId);
      fd.append("projectId", this.projectItem.code);
      fd.append("clientId", this.clientId);
      fd.append("clientName", this.clientName);
      fd.append("mainId", this.mainId);
      fd.append("class", "RFP");
      fd.append("projectName", this.projectItem.name);
      fd.append("payeeName", this.payeeName);
      fd.append("modeOfPayment", this.modeOfPaymentItem.name);
      fd.append("purpose", this.purpose);
      fd.append("currency", this.currencyItem.name);
      fd.append("reportingManagerId", this.reportingManagerItem.code);
      fd.append("companyName", this.companyName);
      fd.append("removedFiles", JSON.stringify(this.removedAttachedFilesId));
      fd.append("liquidation", JSON.stringify(this.liquidation));

      axios
        .post("http://127.0.0.1:8000/api/reply-request", fd)
        .then((res) => {
          // handle success
          console.log(res);
          this.isLoadingModal = false;
          document.getElementById("modalCloseButton").click();
          this.openToast("top-right", "success", res.data.message);
          this.$router.replace("/approvals");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
    close() {
      this.$router.replace("/clarifications");
    },


    // The Attachments
    preview(mimeType, imageBytes) {
      var newTab = window.open();
      newTab.document.body.innerHTML = `<img src="data:${mimeType};base64,${imageBytes}" resizable=yes, style="max-width: 100%; height: auto; ">`;

    },

    // Add new files scripts
    onFileSelected(event) {
      let selectedFiles = event.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        this.selectedFileNew.push(selectedFiles[i]);
      }
      this.setFilePreviewNew();
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

    // preview function of newly added files
    filePreviewNew(i) {
      // console.log(i)
      const url = this.filespreviewNew[i].link;
      window.open(url, "_blank", "resizable=yes");
    },

    // remove existing attached files
    removeAttachedFile(index, id, filename, filepath) {
      const attachmentId = { id: id, filename: filename, filepath: filepath };
      this.removedAttachedFilesId.push(attachmentId);
      this.selectedFile.splice(index, 1);
      // this.setFilePreviewNew();

      // console.log(this.removedAttachedFilesId);
      // console.log(this.selectedFile);
      // console.log(this.filespreviewNew);
    },

    // remove newly added files
    removeFileNew(i) {
      this.selectedFileNew.splice(i, 1);
      this.setFilePreviewNew();
    },

    // End Attachments

    update() {
      const addData = {
        id: this.editliquidation.id,
        trans_date: this.modalDate,
        client_id: this.itemclientName.code,
        client_name: this.itemclientName.name,
        expense_type: this.itemmodalExpenseType.name,
        currency: this.itemmodalCurrency.name,
        Amount: this.modalamount,
        description: this.modalremarks,
      };
      this.liquidation.push(addData);

      this.editliquidation = "";
      // this.liquidation.push(this.editliquidation)
      this.liquidation.sort(function (a, b) {
        return a.id - b.id;
      });

      console.log(addData.id);
    },

    edit(index) {
      this.isButton = false;
      const selectedLiquidation = this.liquidation[index];
      this.editliquidation = selectedLiquidation;
      this.liquidation.splice(index, 1);

      console.log(selectedLiquidation);

      this.modalDate = selectedLiquidation.trans_date;
      this.itemclientName = {
        code: selectedLiquidation.client_id,
        name: selectedLiquidation.client_name,
      };
      this.itemmodalCurrency = {
        code: selectedLiquidation.currency,
        name: selectedLiquidation.currency,
      };
      this.itemmodalExpenseType = {
        code: selectedLiquidation.expense_type,
        name: selectedLiquidation.expense_type,
      };
      this.modalamount = selectedLiquidation.Amount;
      this.modalremarks = selectedLiquidation.description;
    },

    setButton() {
      this.isButton = true;
    },

    trash(index) {
      this.liquidation.splice(index, 1);
    },

    insert() {
      const addData = {
        id: this.i++,
        trans_date: this.modalDate,
        client_id: this.itemclientName.code,
        client_name: this.itemclientName.name,
        expense_type: this.itemmodalExpenseType.name,
        description: this.modalremarks,
        currency: this.itemmodalCurrency.name,
        Amount: this.modalamount,
      };
      this.liquidation.push(addData);
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

    async getcurrencyName() {
      const response = await fetch(
        "http://127.0.0.1:8000/api/get-currencyType",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const responseData = await response.json();
      // console.log(responseData[0])
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to fetch Currency Type."
        );
        throw error;
      }

      const modalCurrency = [];
      for (const key in responseData[0]) {
        const request = {
          code: responseData[0][key].currencyName,
          name: responseData[0][key].currencyName,
        };
        modalCurrency.push(request);
      }
      this.modalCurrency = modalCurrency;
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

    async getLiquidation(id) {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/rfp-main-liquidation/${id}`
        );
        // console.log(resp.data);
        this.liquidation = resp.data;
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    },
    async getProjects() {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/general-projects`
        );
        // console.log(resp.data);
        const projects = [];
        for (const key in resp.data) {
          const request = {
            code: resp.data[key].project_id,
            name: resp.data[key].project_name,
          };
          projects.push(request);
        }
        this.project = projects;
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    },

    async getReportingManager(loggedUserId) {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/reporting-manager/${loggedUserId}`
        );
        // console.log(resp.data);

        // showReportingManager - responesSix
        const reportingManager = [];
        for (const key in resp.data) {
          const request = {
            code: resp.data[key].RMID,
            name: resp.data[key].RMName,
          };
          reportingManager.push(request);
        }
        this.reportingManager = reportingManager;
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    },

    async getAttachments(id, form) {
      try {
        const resp = await axios.get(
          `http://127.0.0.1:8000/api/getRfpAttachments/${id}/${form}`
        );
        // console.log(resp.data);

        // showReportingManager - responesSix
        this.selectedFile = resp.data.data;
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
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
</style>
