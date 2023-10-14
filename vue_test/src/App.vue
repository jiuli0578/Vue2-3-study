<template>
    <div>
        <button>原生按钮</button>
        <hr>
        <jiuli-row>
            <jiuli-button plain>朴素按钮</jiuli-button>
            <jiuli-button type="primary" plain>主要按钮</jiuli-button>
            <jiuli-button type="success" plain>成功按钮</jiuli-button>
            <jiuli-button type="info" plain>信息按钮</jiuli-button>
            <jiuli-button type="warning" plain>警告按钮</jiuli-button>
            <jiuli-button type="danger" plain>危险按钮</jiuli-button>
        </jiuli-row>
        <hr>
        <div class="block">
            <span class="demonstration">默认</span>
            <jiuli-date-picker
            type="date"
            placeholder="选择日期">
            </jiuli-date-picker>
        </div>
    </div>
</template>
<script>
    export default {
        name:'App',
    }
</script>