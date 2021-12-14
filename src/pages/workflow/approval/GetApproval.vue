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
        <!-- /. Step Numbers -->

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
                  disabled
                  v-model="dateNeeded"
                  valueType="format"
                  style="display: block; width: 100%; line-height: 20px"
                ></date-picker>
              </div>
            </div>
            <div class="col-md-3">
              <div class="form-group">
                <small
                  ><label for="reportingManager selextForm" id="selextForm"
                    >Reporting Manager</label
                  ></small
                >
                <input
                  type="text"
                  class="form-control py-3 form-control-sm"
                  disabled
                  v-model="reportingManager"
                  id="reportingManager"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <small><label for="projectName">Project Name</label></small>
                <input
                  type="text"
                  class="form-control py-3 form-control-sm"
                  disabled
                  v-model="projectName"
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
                  disabled
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
        </aside>
        <!-- / Request Details -->

        <!-- Payment Details -->
        <div class="row mt-4" v-if="this.counter === 1">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <div class="form-group">
              <small><label for="payeeName">Payee Name</label></small>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="payeeName"
                id="payeeName"
                disabled
              />
            </div>
            <div class="form-group">
              <small><label for="modeOfPayment">Mode of Payment</label></small>
              <input
                type="text"
                v-model="modeOfPayment"
                disabled
                class="form-control form-control-sm"
                id="modeOfPayment"
              />
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="currency">Currency</label></small>
                  <input
                    type="text"
                    disabled
                    v-model="currency"
                    class="form-control form-control-sm"
                    id="currency"
                  />
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <small><label for="amount">Amount</label></small>
                  <input
                    disabled
                    type="text"
                    class="form-control form-control-sm py-3"
                    id="amount"
                    v-model="amount"
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
          <!-- CRUD Liquidation -->
          <table
            class="table table-sm table-bordered table-striped mx-2"
            v-if="isInitiator"
          >
            <thead>
              <tr>
                <th colspan="7" scope="col">
                  <aside class="d-flex align-items-center">
                    <span class="mb-1 ml-1"> Liquidation Table</span>
                  </aside>
                </th>
                <th>
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody style="font-size: 14px">
              <tr v-for="(item, index) in liquidation" :key="item.id">
                <td class="text-center">{{ index + 1 }}.</td>
                <td>{{ item.date }}</td>
                <td>{{ item.clientName }}</td>
                <td>{{ item.expenseType }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.currency }}</td>
                <td>{{ item.amount }}</td>
                <td class="pl-0 m-0">
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
                  <b>Total Amount: {{ this.isInitiator }}</b>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Read only Liquidation -->
          <table
            class="table table-sm table-bordered table-striped mx-2"
            v-else
          >
            <thead>
              <tr>
                <th colspan="7" scope="col">
                  <aside class="d-flex align-items-center">
                    <span class="mb-1 ml-1"> Liquidation Table</span>
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
              <tr>
                <td class="text-center">1.</td>
                <td>2021-23-1</td>
                <td>Cylix Technologies Inc</td>
                <td>Rent</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>PHP</td>
                <td>123123</td>
              </tr>
              <tr>
                <td colspan="6"></td>
                <td colspan="2">
                  <b>Total Amount: 0</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- / Liquidation -->

        <!-- The Attachments -->
        <div
          class="
            d-flex
            align-items-center
            justify-content-center
            text-center
            position-relative
            mt-4
          "
          id="app"
          v-if="this.counter === setAttach"
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
            v-if="isInitiator"
          />

          <div class="p-5 col-md-12 rounded" id="uploadContainer">
            <label for="assetsFieldHandle" class="block cursor-pointer">
              <span class="text-secondary" v-if="isInitiator"
                >Click here to attach file(s)</span
              >
              <span class="text-secondary" v-else
                >List of attached file(s)</span
              >
            </label>

            <!-- paul -->
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
                v-for="(file, index) in selectedFileLiquidation"
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
                    <div v-if="isInitiator">
                      <button
                        class="btn btn-danger btn-sm"
                        type="button"
                        @click="
                          removeFileLiquidation(
                            selectedFileLiquidation.indexOf(file)
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
                        @click="
                          filePreviewLiquidation(
                            selectedFileLiquidation.indexOf(file)
                          )
                        "
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
                    <td>{{ this.reportingManager }}</td>
                  </tr>
                  <tr>
                    <td>Project Name</td>
                    <td>{{ this.projectName }}</td>
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
                    <td>{{ this.modeOfPayment }}</td>
                  </tr>
                  <tr>
                    <td>Currency</td>
                    <td>{{ this.currency }}</td>
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
                    <!-- <th style="width: 10%">Action</th> -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in liquidation" :key="item.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.clientName }}</td>
                    <td>{{ item.expenseType }}</td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.currency }}</td>
                    <td>{{ item.amount }}</td>
                  </tr>

                  <tr>
                    <td colspan="6"></td>
                    <td colspan="1">Total: {{ this.totalAmt }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->

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
                    :key="file.filename"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ file.filename }}</td>
                    <td class="pl-2 pr-2 text-center">
                      <button
                        @click="
                          removeAttachedFile(
                            index,
                            file.id,
                            file.filename,
                            file.filepath
                          )
                        "
                        class="btn btn-danger btn-sm"
                        v-if="isInitiator"
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
                    v-for="(file, index) in selectedFileLiquidation"
                    :key="file.index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ file.name }}</td>
                    <td class="pl-2 pr-2 text-center">
                      <button
                        @click="
                          removeFileLiquidation(
                            selectedFileLiquidation.indexOf(file)
                          )
                        "
                        class="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>

                      <button
                        class="btn btn-secondary btn-sm ml-1"
                        @click="
                          filePreviewLiquidation(
                            selectedFileLiquidation.indexOf(file)
                          )
                        "
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
                class="btn btn-block btn-success btn-sm"
                data-toggle="modal"
                data-target="#modal-default"
                @click="setTitle('Approve')"
              >
                Approve
              </button>
            </div>

            <div class="col-lg-2" v-if="!isInitiator">
              <button
                type="button"
                class="btn btn-block btn-danger btn-sm"
                data-toggle="modal"
                data-target="#modal-default"
                @click="setTitle('Reject')"
              >
                Reject
              </button>
            </div>

            <div class="col-lg-2" v-if="!isInitiator">
              <button
                type="button"
                class="btn btn-block btn-warning btn-sm"
                data-toggle="modal"
                data-target="#modal-default"
                @click="setTitle('Clarify')"
              >
                Clarify
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
          <div class="overlay" v-show="isLoading">
            <i class="fas fa-2x fa-sync fa-spin"></i>
          </div>

          <div class="modal-header">
            <h6 class="modal-title">
              <b>{{ this.title }} Request</b>
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
            <div class="row" v-if="isForClarity">
              <div class="col-md-12">
                <div class="form-group">
                  <model-list-select
                    :list="recipent"
                    v-model="itemrecipient"
                    option-value="code"
                    option-text="name"
                    placeholder="Select Recipient"
                    style="padding: 9px"
                  >
                  </model-list-select>
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
                    v-model="remarks"
                    placeholder="Please input request remarks here!"
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
              @click="submit(title)"
              v-show="!isInitiator"
            >
              Submit
            </button>

            <button
              type="button"
              v-show="isInitiator === true && isLiquidation === true"
              class="btn btn-primary btn-sm"
              @click="submit('SubmitInitiator')"
            >
              Submit Double
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
    // Liquidation total amount
    liquidation(newValue) {
      let x = 0;
      for (const key in newValue) {
        x += parseInt(newValue[key].amount);
      }
      this.totalAmt = x;
    },

    // Request Details
    projectItem(newValue) {
      this.getClient(newValue.code);
    },

    counter() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    //Navigate
    $route(newRoute) {
      // this.showRfpMain(this.$route.params.id);
      // this.showRfpDetail(this.$route.params.id);
      // this.showRfpAttachments(this.$route.params.id, "Request for Payment");

      this.getRfpApproval(this.$route.params.id, "Request for Payment");

      this.counter = 0;
      this.withdrawRemarks = "";
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

    // show recipient if button clicked is clarify
    isForClarity() {
      if (this.title === "Clarify") {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      counter: 0,
      // Request Details
      referenceNumber: "",
      requestDate: "",
      dateNeeded: "",
      reportingManager: "",
      projectName: "",
      clientName: "",
      purpose: "",

      // Payee Details
      payeeName: "",
      modeOfPayment: "",
      currency: "",
      amount: "",

      // The Attachments
      selectedFile: [],
      filespreview: "",

      // Modal
      remarks: "",
      title: "",

      isLoading: false,

      // checking if you are the initiator //  all codes regarding liquidation
      loggedUserId: 12,
      isInitiator: false,
      isLiquidation: false,

      selectedFileLiquidation: [],
      filespreviewLiquidation: "",

      removedAttachedFilesId: [],

      // use for client
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

      isButton: true,

      // dropdown for recipient
      recipent: [],
      itemrecipient: {},

      // Liquidation total amount
      totalAmt: 0,

      // Inprogress Id use for clarification
      inprogressId: '',

    };
  },

  created() {
    // console.log(this.$route.params.id);
    // this.showRfpMain(this.$route.params.id);
    // this.showRfpDetail(this.$route.params.id);
    // this.showRfpAttachments(this.$route.params.id, "Request for Payment");
    // this.showActualSign(this.$route.params.id, "Request for Payment");

    this.getRfpApproval(this.$route.params.id, "Request for Payment", 1, 11);

    // use for liquidation
    this.getBusinesses();
    this.getcurrencyName();
    this.getexpenseType();
  },

  methods: {
    setTitle(title) {
      this.title = title;
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

    async submit(type) {
      // this.isLoading = true;
      if (type === "Approve") {
        const response = await fetch(
          "http://127.0.0.1:8000/api/approve-request",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              remarks: this.remarks,
              reqId: this.$route.params.id,
              companyId: "1",
              form: "Request for Payment",
              loggedUserId: this.loggedUserId,
              referenceNumber: this.referenceNumber,
            }),
          }
        );

        const responseData = await response.json();
        console.log(responseData.message);

        this.isLoading = false;
        document.getElementById("modalCloseButton").click();

        this.openToast("top-right", "success", responseData.message);
        this.$router.replace("/approvals");

        if (!response.ok) {
          const error = new Error(
            responseData.message ||
              "Failed to authenticate. Check your login data."
          );
          console.log(error.message);

          this.openToast("top-right", "error", error.message);
          document.getElementById("modalCloseButton").click();
        }
      }

      if (type === "Reject") {
        console.log("Reject");
      }

      if (type === "Clarify") {
        const fd = new FormData();

        fd.append("form", 'Request for payment');
        fd.append("processId", 2211);
        fd.append("loggedUserId", 11);
        fd.append("companyId", 1);
        fd.append("recipientId", this.itemrecipient.code);
        fd.append("remarks", this.remarks);
        fd.append("inprogressId", this.inprogressId);
        fd.append("loggedUserFullname", 'Chua, Konrad A.');




        axios
          .post("http://127.0.0.1:8000/api/send-clarity", fd)
          .then((res) => {
            // handle success
            document.getElementById("modalCloseButton").click();
            // console.log(res);
            this.openToast("top-right", "success", res.data.message);
            this.$router.replace("/approvals");
          })
          .catch((error) => {
            // handle error
            console.log(error);
            document.getElementById("modalCloseButton").click();
            this.openToast("top-right", "error", error);
          })
          .then(() => {
            // always executed
            this.isLoading = false;

          });
        


        







      }

      // liqudidation
      if (type === "SubmitInitiator") {
        const fd = new FormData();

        for (let i = 0; i < this.selectedFileLiquidation.length; i++) {
          fd.append("file[]", this.selectedFileLiquidation[i]);
        }

        fd.append("rfpid", this.$route.params.id);
        fd.append("companyId", 1);
        fd.append("loggedUserId", 136);
        fd.append("remarks", this.remarks);
        fd.append("reference", this.referenceNumber);

        fd.append("liquidation", JSON.stringify(this.liquidation));
        fd.append("removedFiles", JSON.stringify(this.removedAttachedFilesId));

        // console.log(this.$route.params.id)

        axios
          .post("http://127.0.0.1:8000/api/rfpLiquidation", fd)
          .then((res) => {
            // handle success

            this.isLoading = false;
            document.getElementById("modalCloseButton").click();

            console.log(res);
            this.openToast("top-right", "success", res.data.message);
            this.$router.replace("/approvals");
          })
          .catch((error) => {
            // handle error
            console.log(error);
            this.isLoading = false;
            document.getElementById("modalCloseButton").click();
            this.openToast("top-right", "error", error);
          })
          .then(function () {
            // always executed
          });
      }
    },
    close() {
      this.$router.replace("/approvals");
    },
    preview(mimeType, imageBytes) {
      var newTab = window.open();
      newTab.document.body.innerHTML = `<img src="data:${mimeType};base64,${imageBytes}" resizable=yes, style="max-width: 100%; height: auto; ">`;
    },

    getRfpApproval(id, form, companyId, loggedUserId) {
      this.isLoading = true;
      let showRfpMain = `http://127.0.0.1:8000/api/rfp-main/${id}`;
      let showRfpDetail = `http://127.0.0.1:8000/api/rfp-main-detail/${id}`;
      let showRfpAttachments = `http://127.0.0.1:8000/api/getRfpAttachments/${id}/${form}`;
      let showActualSign = `http://127.0.0.1:8000/api/general-actual-sign/${id}/${form}/1`;
      let showLiquidation = `http://127.0.0.1:8000/api/rfp-main-liquidation/${id}`;
      let showRecipient = `http://127.0.0.1:8000/api/getRecipient/${id}/${loggedUserId}/${companyId}/${form}`;
      let showInprogressId = `http://127.0.0.1:8000/api/get-Inprogress/${id}/${companyId}/${form}`

      const requestOne = axios.get(showRfpMain);
      const requestTwo = axios.get(showRfpDetail);
      const requestThree = axios.get(showRfpAttachments);
      const requestFour = axios.get(showActualSign);
      const requestFive = axios.get(showLiquidation);
      const requestSix = axios.get(showRecipient);
      const requestSeven = axios.get(showInprogressId);


      axios
        .all([
          requestOne,
          requestTwo,
          requestThree.catch(() => null),
          requestFour,
          requestFive.catch(() => null),
          requestSix,
          requestSeven.catch(() => null),
        ])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];
            const responesThree = responses[2];
            const responesFour = responses[3];
            const responesFive = responses[4];
            const responesSix = responses[5];
            const responesSeven = responses[6];

            

            // showRfpMain - responseOne
            this.referenceNumber = responseOne.data.data.REQREF;
            this.requestDate = responseOne.data.data.DATE;
            this.dateNeeded = responseOne.data.data.Deadline;
            this.reportingManager = responseOne.data.data.REPORTING_MANAGER;
            this.amount = responseOne.data.data.AMOUNT;
            this.uid = responseOne.data.data.UID;

            if (responseOne.data.data.UID === this.loggedUserId) {
              this.isInitiator = true;
              this.counter = 2;
            } else {
              this.isInitiator = false;
            }

            // showRfpDetail - responseTwo
            this.projectName = responseTwo.data.data.PROJECT;
            this.clientName = responseTwo.data.data.CLIENTNAME;
            this.purpose = responseTwo.data.data.PURPOSED;
            this.payeeName = responseTwo.data.data.PAYEE;
            this.currency = responseTwo.data.data.CURRENCY;
            this.modeOfPayment = responseTwo.data.data.MOP;

            // showRfpAttachments - responesThree
            this.selectedFile = responesThree.data.data;
            // console.log(this.selectedFile);

            //showActualSign - responesFour
            if (responesFour.data[2].STATUS === "Completed") {
              console.log("liquidation is true");
              this.isLiquidation = true;
            } else {
              // alert('false')
              console.log("liquidation is false");
              this.isLiquidation = false;
            }
            // showLiquidation - responesFive
            console.log(responesFive);

            // showRecipient - responseSix

            const recipient = [];
            for (const key in responesSix.data) {
              const request = {
                code: responesSix.data[key].uid,
                name: responesSix.data[key].name,
              };

              recipient.push(request);
            }

            this.recipent = recipient;
            console.log(this.recipent)


            // showInprogressId - responesSeven
            this.inprogressId = responesSeven.data[0].inpId
            // console.log(this.inprogressId)

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

    // showRfpMain(id) {
    //   axios
    //     .get(`http://127.0.0.1:8000/api/rfp-main/${id}`)
    //     .then((response) => {
    //       // handle success
    //       this.referenceNumber = response.data.data.REQREF;
    //       this.requestDate = response.data.data.DATE;
    //       this.dateNeeded = response.data.data.Deadline;
    //       this.reportingManager = response.data.data.REPORTING_MANAGER;
    //       this.amount = response.data.data.AMOUNT;
    //       this.uid = response.data.data.UID;

    //       if (response.data.data.UID === this.loggedUserId) {
    //         this.isInitiator = true;
    //         this.counter = 2;
    //       } else {
    //         this.isInitiator = false;
    //       }
    //     })
    //     .catch((error) => {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(() => {
    //       // always executed
    //       // console.log(response)
    //     });
    // },
    // showRfpDetail(id) {
    //   axios
    //     .get(`http://127.0.0.1:8000/api/rfp-main-detail/${id}`)
    //     .then((response) => {
    //       // handle success
    //       this.projectName = response.data.data.PROJECT;
    //       this.clientName = response.data.data.CLIENTNAME;
    //       this.purpose = response.data.data.PURPOSED;
    //       this.payeeName = response.data.data.PAYEE;
    //       this.currency = response.data.data.CURRENCY;
    //       this.modeOfPayment = response.data.data.MOP;
    //     })
    //     .catch((error) => {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(() => {
    //       // always executed
    //     });
    // },

    // showRfpAttachments(id, form) {
    //   axios
    //     .get(`http://127.0.0.1:8000/api/getRfpAttachments/${id}/${form}`)
    //     .then((response) => {
    //       // handle success
    //       this.selectedFile = response.data.data;

    //       console.log(this.selectedFile.length);
    //     })
    //     .catch((error) => {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(() => {
    //       // always executed
    //     });
    // },

    // showActualSign(id, form) {
    //   axios
    //     .get(`http://127.0.0.1:8000/api/general-actual-sign/${id}/${form}/1`)
    //     .then((response) => {
    //       // handle success

    //       if (
    //         response.data[3].STATUS === "In Progress" ||
    //         response.data[4].STATUS === "In Progress"
    //       ) {
    //         console.log("liquidation is true");
    //         this.isLiquidation = true;
    //       } else {
    //         // alert('false')
    //         console.log("liquidation is false");

    //         this.isLiquidation = false;
    //       }
    //     })
    //     .catch((error) => {
    //       // handle error
    //       console.log(error);
    //     })
    //     .then(() => {
    //       // always executed
    //     });
    // },

    // for liquidation dropdown /////////////////////////////

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
      // console.log(responseData[0].businessNumber)
      // console.log(modalCurrency)
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

    update() {
      const addData = {
        id: this.editliquidation.id,
        date: this.modalDate,
        clientId: this.itemclientName.code,
        clientName: this.itemclientName.name,
        expenseType: this.itemmodalExpenseType.name,
        currency: this.itemmodalCurrency.name,
        amount: this.modalamount,
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

      this.modalDate = selectedLiquidation.date;
      this.itemclientName = {
        code: selectedLiquidation.clientId,
        name: selectedLiquidation.clientName,
      };
      this.itemmodalCurrency = {
        code: selectedLiquidation.currency,
        name: selectedLiquidation.currency,
      };
      this.itemmodalExpenseType = {
        code: selectedLiquidation.expenseType,
        name: selectedLiquidation.expenseType,
      };
      this.modalamount = selectedLiquidation.amount;
      this.modalremarks = selectedLiquidation.description;
    },

    setButton() {
      this.isButton = true;
    },

    trash(index) {
      this.liquidation.splice(index, 1);
    },

    insert() {
      console.log(this.modalamount);

      const addData = {
        id: this.i++,
        date: this.modalDate,
        clientId: this.itemclientName.code,
        clientName: this.itemclientName.name,
        expenseType: this.itemmodalExpenseType.name,
        currency: this.itemmodalCurrency.name,
        amount: this.modalamount,
        description: this.modalremarks,
      };
      this.liquidation.push(addData);
    },

    // The Attachments
    onFileSelected(event) {
      let selectedFiles = event.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        this.selectedFileLiquidation.push(selectedFiles[i]);
      }
      this.setFilePreviewLiquidation();
    },

    filePreviewLiquidation(i) {
      // console.log(i)
      const url = this.filespreviewLiquidation[i].link;
      window.open(url, "_blank", "resizable=yes");
    },

    setFilePreviewLiquidation() {
      let files = this.selectedFileLiquidation;
      const fileContainer = [];
      for (let i = 0; i < files.length; i++) {
        let tmppath = URL.createObjectURL(files[i]);
        const thisFiles = {
          link: tmppath,
        };
        fileContainer.push(thisFiles);
      }
      this.filespreviewLiquidation = fileContainer;
    },

    removeFileLiquidation(i) {
      this.selectedFileLiquidation.splice(i, 1);
      this.setFilePreviewLiquidation();
    },

    removeAttachedFile(index, id, filename, filepath) {
      const attachmentId = { id: id, filename: filename, filepath: filepath };
      this.removedAttachedFilesId.push(attachmentId);
      this.selectedFile.splice(index, 1);
      this.setFilePreviewLiquidation();

      console.log(this.removedAttachedFilesId);
      console.log(this.selectedFile);
      console.log(this.filespreviewLiquidation);
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
