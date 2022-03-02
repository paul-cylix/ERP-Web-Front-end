<template>
    <div class="action-buttons d-flex justify-content-center">
        <button class="btn btn-outline-success btn-sm" @click="handleAction('open')">
            <i class="fas fa-folder-open"></i>
        </button>
        <button class="btn btn-outline-primary ml-1 btn-sm" @click="handleAction('message')">
            <i class="fas fa-envelope"></i>
        </button>
        <button class="btn btn-outline-dark ml-1 btn-sm" @click="handleAction('status')">
            <i class="fas fa-book-reader"></i>
        </button>
        
        
        
    </div>
</template>
<script>
export default {
    name: "ActionButtons",
    // inject: ["handleAction"],
    methods: {
        handleAction(actionName) {

            const id = this.data.id; // 123
            // const name = this.data.workflow+'byId'; // inprogressbyId

            const workflow = this.data.workflow // inprogress
            const frmclass = this.data.frmClass // requestforpayment
            const frmName = this.data.requestType
            const name = frmName+'-'+this.data.workflow; // inprogressbyId


            if(actionName === 'open'){
                this.$router.push({name: name, params: { id: id, workflow:workflow,frmClass:frmclass, frmName:frmName }})
                // console.log(this.data);
            }

            if(actionName === 'message'){
                alert('message')
            }

            if(actionName === 'status'){
                alert('status')
            }



        },
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>