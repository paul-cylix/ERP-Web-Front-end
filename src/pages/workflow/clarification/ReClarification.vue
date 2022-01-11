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
        <h3 class="card-title">Reimbursement Request</h3>
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
          <div class="progressbar" :class="classE">
            <span :class="classE">5</span>
          </div>
          <div class="progressbar" :class="classF">
            <span :class="classF">6</span>
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
          <div class="textbar" :class="classC">
            <small
              ><span :class="classC" class="font-weight-bold"
                >Expense Details</span
              ></small
            >
          </div>
          <div class="textbar" :class="classD">
            <small
              ><span :class="classD" class="font-weight-bold"
                >Transportation Details</span
              ></small
            >
          </div>
          <div class="textbar" :class="classE">
            <small
              ><span :class="classE" class="font-weight-bold"
                >Attachments</span
              ></small
            >
          </div>
          <div class="textbar" :class="classF">
            <small
              ><span :class="classF" class="font-weight-bold"
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
                <!-- <input type="date" class="form-control form-control-sm" id="requestDate"> -->
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
                  v-if="isEdit"
                ></date-picker>

                <input
                  type="text"
                  v-else
                  class="form-control py-3 form-control-sm"
                  disabled
                  v-model="dateNeeded"
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
                <model-list-select
                  :list="reportingManager"
                  v-model="reportingManagerItem"
                  option-value="code"
                  option-text="name"
                  placeholder="select item"
                  style="padding: 9px"
                  v-if="isEdit"
                >
                </model-list-select>

                <input
                  v-else
                  type="text"
                  disabled
                  class="form-control py-3 form-control-sm"
                  v-model="reportingManagerItem.name"
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
                  v-if="isEdit"
                >
                </model-list-select>

                <input
                  type="text"
                  v-else
                  disabled
                  class="form-control py-3 form-control-sm"
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
                <textarea
                  class="form-control"
                  name="purpose"
                  id="purpose"
                  v-model="purpose"
                  :disabled="isEdit === false"
                  rows="5"
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
                :disabled="isEdit === false"
              />
            </div>
            <div class="form-group">
              <small><label for="modeOfPayment">Mode of Payment</label></small>
              <input
                type="text"
                disabled
                class="form-control form-control-sm"
                id="modeOfPayment"
              />
              <model-list-select
                v-if="false"
                :list="modeOfPayment"
                v-model="modeOfPaymentItem"
                option-value="code"
                option-text="name"
                placeholder="select item"
                style="padding: 9px"
              >
              </model-list-select>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <small><label for="currency">Currency</label></small>
                  <input
                    type="text"
                    disabled
                    class="form-control form-control-sm"
                    id="currency"
                  />
                  <model-list-select
                    v-if="false"
                    :list="currency"
                    v-model="currencyItem"
                    option-value="code"
                    option-text="name"
                    placeholder="select item"
                    style="padding: 9px"
                  >
                  </model-list-select>
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <!-- <label for="amount">Amount</label> -->
                  <!-- <input type="text" class="form-control" name="amount" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="0.00">  -->
                  <small><label for="amount">Amount</label></small>
                  <input
                    type="text"
                    class="form-control form-control-sm py-3"
                    id="amount"
                    v-model="amount"
                    :disabled="isEdit === false"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
        <!-- / Payment Details -->

        <!-- Expense Details -->
        <div class="row mt-4" v-if="this.counter === 2">
          <table class="table table-sm table-bordered table-striped mx-2">
            <thead>
              <tr>
                <th colspan="6" scope="col">
                  <aside class="d-flex align-items-center">
                    <span class="mb-1 ml-1"> Expense Detals</span>
                  </aside>
                </th>
                <th v-if="isEdit">
                  <aside class="text-center">
                    <button
                      class="btn btn-sm btn-success m-0"
                      data-toggle="modal"
                      data-target="#modal-expenseType"
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
                <th scope="col">Remarks</th>
                <th scope="col">Amount</th>
                <th v-if="isEdit" scope="col">Action</th>
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
                <td class="pl-0 m-0" v-if="isEdit">
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

              <tr>
                <td colspan="5"></td>
                <td colspan="2">
                  <b>Total Amount: {{ this.expenseType_totalAmount }}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /. Expense Details -->

        <!-- Transportation Details -->
        <div class="row mt-4" v-if="this.counter === 3">
          <table class="table table-sm table-bordered table-striped mx-2">
            <thead>
              <tr>
                <th colspan="8" scope="col">
                  <aside class="d-flex align-items-center">
                    <span class="mb-1 ml-1"> Transportation Detals</span>
                  </aside>
                </th>
                <th v-if="isEdit">
                  <aside class="text-center">
                    <button
                      class="btn btn-sm btn-success m-0"
                      data-toggle="modal"
                      data-target="#modal-Transportation"
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
                <th scope="col">Destination From</th>
                <th scope="col">Destination To</th>
                <th scope="col">Mode of Transportation</th>
                <th scope="col">Remarks</th>
                <th scope="col">Amount</th>
                <th v-if="isEdit" scope="col">Action</th>
              </tr>
            </thead>

            <tbody style="font-size: 14px">
              <tr v-for="(item, index) in transpoSetup_Data" :key="item.id">
                <td class="text-center">{{ index + 1 }}.</td>
                <td>{{ item.date_ }}</td>
                <td>{{ item.CLIENT_NAME }}</td>
                <td>{{ item.DESTINATION_FRM }}</td>
                <td>{{ item.DESTINATION_TO }}</td>
                <td>{{ item.MOT }}</td>
                <td>{{ item.DESCRIPTION }}</td>
                <td>{{ item.AMT_SPENT }}</td>
                <td class="pl-0 m-0" v-if="isEdit">
                  <aside class="d-flex justify-content-center">
                    <button
                      class="btn btn-sm btn-info m-0"
                      data-toggle="modal"
                      data-target="#modal-Transportation"
                      @click="
                        edit_transpoSetup(transpoSetup_Data.indexOf(item))
                      "
                    >
                      <i class="fas fa-edit"></i>
                    </button>
                    <button
                      class="btn btn-sm btn-danger m-0 ml-1"
                      @click="
                        trash_transpoSetup(transpoSetup_Data.indexOf(item))
                      "
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </aside>
                </td>
              </tr>

              <tr>
                <td colspan="7"></td>
                <td colspan="2">
                  <b>Total Amount: {{ this.transpoSetup_totalAmount }}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /. Transportation Details -->

        <!-- The Attachments -->
        <div
          v-else-if="this.counter === 4"
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
          <div
            class="p-5 col-md-12 rounded"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
            id="uploadContainer"
          >
            <input
              v-if="isEdit"
              type="file"
              multiple
              name="fields[assetsFieldHandle][]"
              id="assetsFieldHandle"
              class="w-25 h-25 overflow-hidden"
              @change="onFileSelected"
              ref="file"
              accept=".pdf,.jpg,.jpeg,.png"
            />

            <label for="assetsFieldHandle" class="block cursor-pointer">
              <span v-if="isEdit" class="text-secondary"
                >Click here to add new file(s)</span
              >
              <span v-else class="text-secondary"
                >List of Attached file(s)</span
              >
            </label>
            <!-- <aside class="d-flex align-items-center justify-content-center"> -->
            <ul class="mt-4 text-decoration-none ulUpload" v-cloak>
              <!-- Already attached files -->
              <li
                class="text-sm mt-2"
                v-for="(file, index) in selectedFile"
                :key="file.id"
              >
                <div class="row d-flex justify-content-center">
                  <div class="col-md-4 d-flex">
                    <div class="col-1">
                      <b>{{ index + 1 + "." }}</b>
                    </div>
                    <div class="col text-left">
                      <span>{{ file.filename }}</span>
                    </div>
                    <div class="co-2" v-if="isEdit">
                      <button
                        class="btn btn-danger btn-sm"
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
              <!-- /.Already attached files -->

              <!-- Newly added files -->
              <li
                class="text-sm mt-2"
                v-for="(file, index) in selectedFileNew"
                :key="file.id"
              >
                <div class="row d-flex justify-content-center">
                  <div class="col-md-4 d-flex">
                    <div class="col-1">
                      <b>{{ index + 1 + "." }}</b>
                    </div>
                    <div class="col text-left">
                      <span>{{ file.name }}</span>
                    </div>
                    <div class="co-2">
                      <button
                        class="btn btn-danger btn-sm"
                        type="button"
                        @click="removeNew(selectedFileNew.indexOf(file))"
                        title="Remove file"
                      >
                        Remove
                      </button>
                    </div>
                    <div class="col-2">
                      <button
                        @click="previewNew(selectedFileNew.indexOf(file))"
                        class="btn btn-secondary btn-sm"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <!-- /.Newly added files -->
            </ul>

            <!-- </aside> -->
          </div>
        </div>
        <!-- / The Attachments -->

        <!--  Form Review -->
        <aside v-else-if="this.counter === 5">
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
                    <th style="width: 5%">#</th>
                    <th style="width: 80%">Filename</th>
                    <th style="width: 15%">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(file, index) in selectedFile" :key="file.id">
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
                        v-if="isEdit"
                        class="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>

                      <button
                        @click="preview(file.mimeType, file.imageBytes)"
                        class="btn btn-secondary btn-sm ml-1"
                      >
                        Preview
                      </button>
                    </td>
                  </tr>

                  <tr v-for="(file, index) in selectedFileNew" :key="file.name">
                    <td>{{ index + 1 }}</td>
                    <td>{{ file.name }}</td>
                    <td class="pl-2 pr-2 text-center">
                      <button
                        @click="removeNew(selectedFileNew.indexOf(file))"
                        class="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                      <button
                        @click="previewNew(selectedFileNew.indexOf(file))"
                        class="btn btn-secondary btn-sm ml-1"
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
        <!-- ./Attachments Review -->
        </aside>

        <!-- / Form Review -->

        <!-- Modal Expense Type -->
        <div class="modal fade" id="modal-expenseType">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h6 class="modal-title">
                  <b>Expense Type</b>
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
                        v-model="expenseType_Date"
                      ></date-picker>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="form-group">
                      <small
                        ><label for="projectName">Client Name</label></small
                      >
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
                      <small><label for="projectName">Amount</label></small>

                      <input
                        type="text"
                        class="form-control form-control-sm py-3"
                        id="modalamount"
                        v-model="expenseType_Amount"
                      />
                    </div>
                  </div>

                  <div class="col-md-8">
                    <div class="form-group">
                      <small
                        ><label for="modalamount">Expense Type</label></small
                      >
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
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="remarks"
                        rows="5"
                        v-model="expenseType_Remarks"
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
        <!-- /. Modal Expense Type -->

        <!-- Modal Transporation Details  -->
        <div class="modal fade" id="modal-Transportation">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h6 class="modal-title">
                  <b>Transportation Details</b>
                </h6>
                <button
                  type="button"
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
                        v-model="transpoSetup_Date"
                      ></date-picker>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="form-group">
                      <small
                        ><label for="projectName">Client Name</label></small
                      >
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
                  <div class="col-md-6">
                    <div class="form-group">
                      <small
                        ><label for="projectName"
                          >Mode of Transportation</label
                        ></small
                      >

                      <model-list-select
                        :list="transpoSetup"
                        v-model="itemtranspoSetup"
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
                      <small><label for="projectName">Amount</label></small>

                      <input
                        type="text"
                        class="form-control form-control-sm py-3"
                        id="modalamount"
                        v-model="transpoSetup_Amount"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <small
                        ><label for="projectName"
                          >Destination From</label
                        ></small
                      >

                      <input
                        type="text"
                        class="form-control form-control-sm py-3"
                        id="modalamount"
                        v-model="transpoSetup_From"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <small
                        ><label for="projectName">Destination To</label></small
                      >

                      <input
                        type="text"
                        class="form-control form-control-sm py-3"
                        id="modalamount"
                        v-model="transpoSetup_to"
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
                        v-model="transpoSetup_Remarks"
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
                  @click="insert_transpoSetup()"
                >
                  insert
                </button>

                <button
                  v-else
                  type="button"
                  class="btn btn-success btn-sm"
                  @click="update_transpoSetup()"
                >
                  Update
                </button>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal-dialog -->
        </div>
        <!-- /. Modal Transporation Details -->

        <!-- Modal -->
        <div class="modal fade" id="modal-default">
          <div class="modal-dialog">
            <div class="modal-content">
              <!-- Overlay Loading Spinner -->
              <div class="overlay" v-show="isLoadingModal">
                <i class="fas fa-2x fa-sync fa-spin"></i>
              </div>

              <div class="modal-header">
                <h6 class="modal-title"><b>Reply Request</b></h6>
                <button
                  type="button"
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

        <!-- /. Main Form -->

        <!-- Buttons -->
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

            <div class="col-lg-2" v-if="this.counter <= 4">
              <button
                type="button"
                @click="counter++"
                class="btn btn-block btn-primary btn-sm"
              >
                Next
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
        <!-- / Buttons -->
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
  created() {
    // Request Details
    this.getProjects();
    this.getReportingManager(this.loggedUserId);
    this.todaysDate();
    this.getBusinesses();
    this.getexpenseType();
    this.gettranspoSetup();

    this.getReClarification(
      this.$route.params.id,
      this.$route.params.frmName,
      this.companyId,
      this.loggedUserId
    );
  },
  watch: {
    // Request Details
    projectItem(newValue) {
      this.getClient(newValue.code);
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

    // Calendaer
    todaysYear() {
      const today = new Date();
      // const dd = today.getDate();
      // const mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      // const todaysDate = yyyy + "-" + mm + "-" + dd;
      return yyyy;
    },

    // Sum of all amount spend in liquidation
    expenseType_totalAmount() {
      if (this.expenseType_Data.length > 0) {
        const total = this.expenseType_Data
          .map((expenseType_Data) => parseInt(expenseType_Data.AMOUNT))
          .reduce((acc, expenseType_Data) => expenseType_Data + acc);
        return total;
      } else {
        return 0;
      }
    },

    // sum of all amount spend in transportation
    transpoSetup_totalAmount() {
      if (this.transpoSetup_Data.length > 0) {
        const total = this.transpoSetup_Data
          .map((transpoSetup_Data) => parseInt(transpoSetup_Data.AMT_SPENT))
          .reduce((acc, transpoSetup_Data) => transpoSetup_Data + acc);
        return total;
      } else {
        return 0;
      }
    },

    isEdit() {
      const x = this.isInitiator === true;
      const y = this.forEdit === true;
      const z = x && y;

      if (z) {
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
      reportingManager: [],
      reportingManagerItem: {},
      referenceNumber: "",
      requestDate: "",
      project: [],
      projectItem: {},
      dateNeeded: "",
      clientName: "",
      clientId: "",
      mainId: "",
      purpose: "",
      guid: "",

      // Payment Details
      modeOfPayment: [
        { code: "Cash", name: "Cash" },
        { code: "Check", name: "Check" },
        { code: "Credit to Account", name: "Credit to Account" },
      ],
      modeOfPaymentItem: {},
      currency: [
        { code: "PHP", name: "PHP" },
        { code: "AUD", name: "AUD" },
        { code: "CAD", name: "CAD" },
        { code: "EUR", name: "EUR" },
        { code: "USD", name: "USD" },
      ],
      currencyItem: {},
      payeeName: "",
      amount: "",

      modalclient: [],
      itemclientName: {},

      modalExpenseType: [],
      itemmodalExpenseType: {},

      expenseType_Date: "",
      expenseType_Amount: "",
      expenseType_Remarks: "",

      // The Attachments
      selectedFile: [],
      filespreview: [],

      selectedFileNew: [],
      filespreviewNew: [],

      removedAttachedFilesId: [],

      isButton: true,

      // data for expense type
      expenseType_Data: [],
      expenseType_EditData: [],
      i: 0,

      // data for transportation
      transpoSetup: [],
      itemtranspoSetup: {},
      transpoSetup_Date: "",
      transpoSetup_Amount: "",
      transpoSetup_From: "",
      transpoSetup_to: "",
      transpoSetup_Remarks: "",

      transpoSetup_Data: [],
      transpoSetup_EditData: [],

      // Logged User Data
      loggedUserId: 136,
      loggedUserFirstName: "Rosevir",
      loggedUserLastName: "Ceballos",
      loggedUserFullName: "Rosevir Ceballos Jr.",
      loggedUserDepartment: "Information Technology",
      loggedUserPosition: "Senior Developer",
      companyId: 1,
      companyName: "Cylix Technologies Inc.",

      // // approver
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

      isLoading: false,
      isLoadingModal: false,

      // reply modal
      remarks: "",

      form: this.$route.params.frmName,
      processId: this.$route.params.id,

      forEdit: false,
      isInitiator: false,
    };
  },

  methods: {
    async reply() {
      // console.log("reply");

      // console.log(this.dateNeeded);
      // console.log(this.reportingManagerItem.code);
      // console.log(this.reportingManagerItem.name);
      // console.log(this.projectItem.code);
      // console.log(this.projectItem.name);
      // console.log(this.clientName);
      // console.log(this.clientId);
      // console.log(this.mainId);
      // console.log(this.purpose);

      // console.log(this.payeeName);
      // // console.log(this.modeOfPaymentItem.name);
      // // console.log(this.currencyItem.name);
      // console.log(this.amount);

      // console.log(this.selectedFileNew);
      // console.log(this.removedAttachedFilesId);
      // console.log(this.remarks);
      // console.log(this.processId);

      // console.log(this.form);
      // console.log(this.loggedUserId);
      // console.log(this.loggedUserFullName);
      // console.log(this.companyId);
      // console.log(this.companyName);

      // console.log(this.expenseType_Data);
      // console.log(this.transpoSetup_Data);
      // console.log(this.guid);

      const fd = new FormData();

      for (let i = 0; i < this.selectedFileNew.length; i++) {
        fd.append("file[]", this.selectedFileNew[i]);
      }

      fd.append("expenseType_Data", JSON.stringify(this.expenseType_Data));
      fd.append("transpoSetup_Data", JSON.stringify(this.transpoSetup_Data));

      fd.append("dateNeeded", this.dateNeeded);
      fd.append("reportingManagerId", this.reportingManagerItem.code);
      fd.append("reportingManagerName", this.reportingManagerItem.name);
      fd.append("projectId", this.projectItem.code);
      fd.append("projectName", this.projectItem.name);
      fd.append("clientName", this.clientName);
      fd.append("clientId", this.clientId);
      fd.append("mainId", this.mainId);
      fd.append("purpose", this.purpose);

      fd.append("payeeName", this.payeeName);
      fd.append("amount", this.amount);
      fd.append("remarks", this.remarks);
      fd.append("processId", this.processId);

      fd.append("form", this.form);
      fd.append("loggedUserId", this.loggedUserId);
      fd.append("loggedUserFullName", this.loggedUserFullName);
      fd.append("companyId", this.companyId);
      fd.append("companyName", this.companyName);
      fd.append("guid", this.guid);

      fd.append("class", "RE");

      fd.append("removedFiles", JSON.stringify(this.removedAttachedFilesId));

      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/api/reply-request",
          fd
        );

        console.log(res.data);
        this.isLoading = false;

        if (res.status === 200) {
          document.getElementById("modalCloseButton").click();
          this.openToast("top-right", "success", res.data.message);
          this.$router.replace("/approvals");
        }

        if (res.status === 202) {
          // console.log(res)
          this.openToast("top-right", "error", res.data.message);
        }
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    },

    close() {
      this.$router.replace("/clarifications");
    },

    getReClarification(id, form, companyId, loggedUserId) {
      this.isLoading = true;
      console.log(loggedUserId);
      // console.log(companyId);
      let showMain = `http://127.0.0.1:8000/api/getRE/${id}`;
      let showExpense = `http://127.0.0.1:8000/api/get-ReExpense/${id}`;
      let showTranspo = `http://127.0.0.1:8000/api/get-ReTranspo/${id}`;
      let showAttachments = `http://127.0.0.1:8000/api/getRfpAttachments/${id}/${form}`;
      let showActualSign = `http://127.0.0.1:8000/api/general-actual-sign/${id}/${form}/${companyId}`;

      const requestOne = axios.get(showMain);
      const requestTwo = axios.get(showExpense);
      const requestThree = axios.get(showTranspo);
      const requestFour = axios.get(showAttachments);
      const requestFive = axios.get(showActualSign);

      axios
        .all([
          requestOne.catch(() => null),
          requestTwo.catch(() => null),
          requestThree.catch(() => null),
          requestFour.catch(() => null),
          requestFive.catch(() => null),
        ])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];
            const responesThree = responses[2];
            const responesFour = responses[3];
            const responesFive = responses[4];

            // showMain - responseOne
            this.guid = responseOne.data.data.GUID;

            this.referenceNumber = responseOne.data.data.REQREF;
            this.requestDate = responseOne.data.data.REQUESTED_DATE;
            this.dateNeeded = responseOne.data.data.TRANS_DATE;
            this.reportingManagerName = responseOne.data.data.REPORTING_MANAGER;
            this.reportingManagerId = responseOne.data.data.REPORTING_MANAGER; // wala pa
            this.projectName = responseOne.data.data.PROJECT;
            this.projectId = responseOne.data.data.PRJID;
            this.clientName = responseOne.data.data.CLIENT_NAME;
            this.clientId = responseOne.data.data.CLIENTID;
            this.mainId = responseOne.data.data.MAINID;
            this.purpose = responseOne.data.data.DESCRIPTION;
            this.payeeName = responseOne.data.data.PAYEE;

            this.amount = responseOne.data.data.TOTAL_AMT_SPENT;
            this.uid = responseOne.data.data.UID;

            if (responseOne.data.data.UID === this.loggedUserId) {
              this.isInitiator = true;
              // this.counter = 0;
            } else {
              this.isInitiator = false;
            }

            // showExpense - responseTwo
            this.expenseType_Data = responseTwo.data;

            // showTranspo - responesThree
            this.transpoSetup_Data = responesThree.data;

            // showAttachments - responesFour
            this.selectedFile = responesFour.data.data;

            showActualSign - responesFive;
            const reportingManagerItem = {
              code: responesFive.data[2].RM_ID,
              name: responesFive.data[2].REPORTING_MANAGER,
            };
            this.reportingManagerItem = reportingManagerItem;

            const projectItem = {
              code: responesFive.data[0].PROJECTID,
              name: responesFive.data[0].PROJECT,
            };
            this.projectItem = projectItem;

            // console.log(responesFive)

            if (responesFive.data[2].STATUS === "Completed") {
              this.forEdit = false;
            } else {
              this.forEdit = true;
            }

            // console.log(this.forEdit)
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
    setButton() {
      this.isButton = true;
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

    insert_transpoSetup() {
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

      // console.log(this.transpoSetup_Data);
    },

    update_transpoSetup() {
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

      this.transpoSetup_Data.push(addData);
      this.transpoSetup_EditData = "";

      this.transpoSetup_Data.sort(function (a, b) {
        return a.id - b.id;
      });

      // console.log(addData.id);
    },

    edit_transpoSetup(index) {
      this.isButton = false;
      const transpoSetup_Data = this.transpoSetup_Data[index];
      this.transpoSetup_EditData = transpoSetup_Data;
      this.transpoSetup_Data.splice(index, 1);

      // console.log(transpoSetup_Data);

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

    insert_ExpenseType() {
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
    },

    update_ExpenseType() {
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
      // this.liquidation.push(this.editliquidation)
      this.expenseType_Data.sort(function (a, b) {
        return a.id - b.id;
      });

      console.log(addData.id);
    },

    edit_ExpenseType(index) {
      this.isButton = false;
      const expenseType_Data = this.expenseType_Data[index];
      this.expenseType_EditData = expenseType_Data;
      this.expenseType_Data.splice(index, 1);

      console.log(expenseType_Data);

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
      const dd = today.getDate();
      const mm = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      const todaysDate = yyyy + "-" + mm + "-" + dd;
      this.requestDate = todaysDate;
      // return todaysDate;
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

    async getReportingManager(loggedUserId) {
      const response = await fetch(
        `http://127.0.0.1:8000/api/reporting-manager/${loggedUserId}`,
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
      let selectedFilesNew = event.target.files;
      for (let i = 0; i < selectedFilesNew.length; i++) {
        this.selectedFileNew.push(selectedFilesNew[i]);
      }
      this.filePreviewNew();
      console.log(this.selectedFileNew);
    },
    removeNew(i) {
      this.selectedFileNew.splice(i, 1);
      this.filePreviewNew();
    },
    previewNew(i) {
      // console.log(i)
      const url = this.filespreviewNew[i].link;
      window.open(url, "_blank", "resizable=yes");
    },

    removeAttachedFile(index, id, filename, filepath) {
      const attachmentId = { id: id, filename: filename, filepath: filepath };
      this.removedAttachedFilesId.push(attachmentId);
      this.selectedFile.splice(index, 1);
    },

    preview(mimeType, imageBytes) {
      var newTab = window.open();
      newTab.document.body.innerHTML = `<img src="data:${mimeType};base64,${imageBytes}" resizable=yes, style="max-width: 100%; height: auto; ">`;
    },

    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains("bg-green-300")) {
        event.currentTarget.classList.remove("bg-gray-100");
        event.currentTarget.classList.add("bg-green-300");
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    drop(event) {
      event.preventDefault();
      this.onFileSelected(); // Trigger the onChange event manually

      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },

    filePreviewNew() {
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
