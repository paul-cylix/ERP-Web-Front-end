<template>
    <div>
        <data-table v-bind="parametersTable1" @actionTriggered="handleAction"/>
    </div>
</template>
<script>

export default {
  name: "App",

  computed: {
    parametersTable1() {
      return {
        data: [
          {
	"id": 1,
	"name": "Prof. Seth Howell DVM",
	"email": "crystal.prosacco@example.org",
	"email_verified_at": "2012-02-19 13:28:17",
	"created_at": "2020-02-23 21:29:25",
	"updated_at": "2020-02-23 21:29:25",
	"gender": "Female",
	"suffix": "Jr.",
	"title": "Dr.",
	"username": "turner.brenden",
	"userAgent": "Mozilla 5.0 (X11; Linux i686) AppleWebKit 5360 (KHTML, like Gecko) Chrome 40.0.868.0 Mobile Safari 5360",
	"creditCardType": "Visa",
	"creditCardNumber": "2514800271552232",
	"photo": "https: lorempixel.com 640 480 ?18703",
	"info": "Occaecati aut rerum aliquam fugiat officia. Eveniet distinctio ut sapiente minus. Corporis omnis molestiae hic itaque neque voluptas.",
	"bio": "Tempora nam ratione inventore aspernatur. Est eius necessitatibus expedita rerum quos quod fuga. Nobis ut saepe itaque ullam. Similique possimus tempora assumenda. Aperiam quasi ratione veritatis placeat enim consequuntur error architecto. Aut unde quasi nostrum blanditiis totam et et. Impedit accusamus enim harum velit quam consequatur.",
	"city": "Hamillport",
	"state": "South Dakota",
	"streetName": "Mohr Mews",
	"country": "American Samoa",
	"timezone": "Europe Vilnius",
	"job": "Recreational Therapist",
	"phone": "+15372887819",
	"company": "Doyle, Davis and Prohaska"
},
        ],
        actionMode: "multiple",
        columnKeys: [
          "name",
          "email",
          "gender",
          "country",
          "job",
          "city",
          "created_at"
        ]
      };
    },
  },

  methods: {
    handleAction(actionName, data) {
      console.log(actionName, data);
      window.alert("check out the console to see the logs");
    }
  }
};
</script>