<!-- ConfirmationDialog.vue -->
<template>
    <div class="box">
        <div class="confirmation">
            <div class="yes-no">
                <p class="text-wrapper"> {{ message }} </p>
                <div class="buttons">
                    <div class="yes">
                        <button @click="confirm" class="div">Yes</button>
                    </div>
                    <div class="no">
                        <button @click="cancel" class="div">No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
    props: {
        message: String,
        onConfirm: Function,
        onCancel: Function,
    },
    methods: {
    confirm() {
        this.$emit('onConfirm');
        },
    cancel() {
        this.$emit('onCancel');
        },
    },
};
</script>

<style scoped>
.box {
    height: 250px;
    width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 1000;
}

.box .confirmation {
    box-shadow: 0px 4px 4px #00000040;
    height: 250px;
    width: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #3eb368;
}

.box .yes-no {
    height: 104px;
    width: 228px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.box .text-wrapper {
    color: #666666;
    font-family: "Inter-Medium", Helvetica;
    font-size: 16px;
    font-weight: 500;
    height: 48px;
    width: 226px;
    text-align: center;
}

.box .buttons {
    height: 32px;
    width: 226px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
}

.box .no,
.box .yes {
    background-color: #d3d3d3;
    border-radius: 4px;
    box-shadow: 2px 2px 4px #00000040;
    height: 32px;
    width: 97px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box .div {
    color: #666666;
    font-family: "Inter-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    height: 20px;
    width: 97px;
    text-align: center;
}



.yes:hover{
    background-color: #3eb368;
}
.no:hover{
    background-color: #3eb368;
}
.div:hover{
    color: #ffffff;
}

</style>
