<template>
    <div class="alert">
        <div class="alert_box">
            <div class="alert_head">{{ alertTitle }}</div>
            <div class="alert_body">
                <div class="alert_txt">
                    {{ alertMsg }}
                </div>
                <div class="alert_func">
                    <button class="normal_btn _generate" @click="confirmHandler">確定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        alertTitle: String,
        alertMsg: String
    },
    methods:{
        confirmHandler(){
            this.$emit("alertConfirm")
        }
    }
}
</script>