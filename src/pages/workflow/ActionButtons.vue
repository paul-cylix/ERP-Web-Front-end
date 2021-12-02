<template>
    <div class="action-buttons d-flex">
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
            // this.$store.commit(actionName, this.data)
            // alert(actionName)
            console.log(this.data.workflow) // inprogress
            console.log(this.data.frmClass) // requestforpayment
            console.log(this.data.id) // 123*

            // const workflow = this.data.workflow;
            // const frmClass = this.data.frmClass;
            const id = this.data.id;


            if(actionName === 'open'){
                // const name = `open-${workflow}-${frmClass}`
                // this.$router.replace
                // this.$router.push('/dashboard')

                const name = 'inprogressbyId';
                // this.$router.push({name: name, params: { id: id, workflow:'inprogress',frmClass:'requestforpayment' }})


                // setTimeout(() => {this.$router.push({name: name, params: { id: id, workflow:'inprogress',frmClass:'requestforpayment' }})}, 500);
                this.$router.push({name: name, params: { id: id, workflow:'inprogress',frmClass:'requestforpayment' }})
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