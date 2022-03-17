import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {};
  },

  mutations: {},

  actions: {
    async queryCompany(_, payload) {
      const companyId = payload;
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/customer-name/${companyId}`
        );


        const customerName = [];
        for (const key in response.data) {
          const request = {
            code: response.data[key].Business_Number,
            name: response.data[key].business_fullname,
            desc: response.data[key].CLIENTCODE,
            term: response.data[key].term_type,
            amgr: response.data[key].PMName,
          };
          customerName.push(request);
        }
        return customerName;
      } catch (error) {
        console.error(error);
        return error;
      }
    },

    async queryCompanyAddress(_, payload) {
      const customerId = payload;
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/customer-address/${customerId}`
        );

        const customerAddress = [];
        for (const key in response.data) {
          const request = {
            code: response.data[key].ID,
            name: response.data[key].ADDRESS,
            desc: response.data[key].Type,
          };
          customerAddress.push(request);
        }

        return customerAddress;
      } catch (error) {
        console.error(error);
        return error;
      }
    },

    async queryCompanyContacts(_, payload) {
      const customerId = payload;
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/customer-contact/${customerId}`
        );

        // console.log(response.data)
        const contactPerson = [];
        const contactNumber = [];
        for (const key in response.data) {
          const cPerson = {
            code: response.data[key].ID,
            name: response.data[key].ContactName,
          };
          contactPerson.push(cPerson);

          const cNumber = {
            code: response.data[key].Number,
            name: response.data[key].Number,
          };
          contactNumber.push(cNumber);
        }

        const personData = {
          contact: contactPerson,
          number: contactNumber,
        };

        // console.log(personData)

        return personData;
      } catch (error) {
        console.error(error);
        return error;
      }
    },

    async queryCompanyCode(_, payload) {
      const customerId = payload;
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/customer-projectcode/${customerId}`
        );
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
    },

    async queryCompanySystemDetails() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/customer-system-details`
        );
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
    },

    async queryCompanyDocumentDetails() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/customer-document-details`
        );

        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
    },

    async insertSystemAndDocumentName(_, payload) {
      const loggedUserId = payload.id;
      const modalInputform = payload.modalInputform;
      const modalTitle = payload.modalTitle;

      const fd = new FormData();
      fd.append("loggedUserId", loggedUserId);
      fd.append("modalInputform", modalInputform);
      fd.append("modalTitle", modalTitle);

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/customer-details-insert",
          fd
        );
        
        return response;
      } catch (err) {
        // Handle Error Here

        console.error(err.response.data);
        throw err;
      }
    },

    async checkIfProjectCodeExist(_, payload) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/customer-projectcode-check",
          { projectCode: payload }
        );
        const isExist = response.data[0]["isExist"];
        // console.log(isExist)
        return isExist;
      } catch (err) {
        console.warn(err.message);
        throw err.message;
      }
    },

    async queryCurrency() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get-currencyType"
        );
        
        const currency = [];
        for (const key in response.data[0]) {
          const cur = {
            code: response.data[0][key].currencyName,
            name: response.data[0][key].currencyName,
          };
          currency.push(cur);
        }
        return currency

      } catch (err) {
        console.warn(err.message);
        throw err.message;
      }
    },

    async createSOF(_, payload){
      try {

      const fd = new FormData();
      fd.append("loggedUserId", localStorage.getItem("id"))
      fd.append("loggedUserFirstName", localStorage.getItem("fname"))
      fd.append("loggedUserLastName", localStorage.getItem("lname"))
      fd.append("loggedUserDepartment", localStorage.getItem("department"))
      fd.append("loggedUserPosition", localStorage.getItem("positionName"))
      fd.append("companyId", localStorage.getItem("companyId"))
      fd.append("companyName", localStorage.getItem("companyName"))

      
      fd.append("softype",payload.sofType.code)

      fd.append("poNumber",payload.poNumber)
      fd.append("poDate",payload.poDate)
      fd.append("scopeOfWork",payload.scopeOfWork)
      fd.append("accountingRemarks",payload.accountingRemarks)

      fd.append("clientID",payload.customerNameItem.code ) // client id
      fd.append("client",payload.customerNameItem.name ) // client name
      fd.append("projectCode",payload.projectCode)
      fd.append("projectShortText",payload.projectShortText)
      fd.append("projectName",payload.projectName)
      fd.append("contactPersonName",payload.contactPersonItem.name ) // contact id
      fd.append("contactPerson",payload.contactPersonItem.code ) // contact id
      fd.append("contactNumber",payload.contactNumberItem.code)
      fd.append("deliveryAddress",payload.deliveryAddressItem.name)
      fd.append("billingAddress",payload.billingAddressItem.name)

      fd.append("paymentTerms",payload.paymentTerms)
      fd.append("projectStart",payload.projectStart)
      fd.append("projectEnd",payload.projectEnd)
      fd.append("warranty",payload.warranty)
      fd.append("currency",payload.currencyItem) // PHP
      fd.append("projectCost",payload.projectCost)

      fd.append("systemname", JSON.stringify(payload.systemDetailsSelected));
      fd.append("documentname", JSON.stringify(payload.documentDetailsSelected));

      fd.append("accountmanager",payload.accountmanager)

      fd.append("downpaymentrequired",payload.downPaymentRequiredItem)
      fd.append("downPaymentPercentage",payload.downPaymentPercentage)

      fd.append("invoicerequired",payload.invoiceRequiredItem)
      fd.append("invoiceDateNeeded",payload.invoiceDateNeeded)

      fd.append("downPaymentDateReceived",payload.downPaymentDateReceived)
      fd.append("invoiceNumber",payload.invoiceNumber)

      fd.append("salesInvoiceReleased",payload.salesInvoiceReleasedItem)
      fd.append("dateOfInvoice",payload.dateOfInvoice)

      fd.append("accountingRemarks",payload.accountingRemarks)

      for (let i = 0; i < payload.selectedFile.length; i++) {
        fd.append("file[]", payload.selectedFile[i]);
      }
 
      const response = await axios.post("http://127.0.0.1:8000/api/save-sof", fd);

      // console.warn(response)
      return response
           
      } catch (err) {
        // Handle Error Here
        console.error(err);
        throw err;
      }


    },
  },

  getters: {},
};
