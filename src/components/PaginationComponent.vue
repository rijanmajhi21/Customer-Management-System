<template>
    <div class="pagination">
        <button @click="previousPage" :disabled="currentPage === 1"><i class='bx bx-chevron-left'></i></button>
        <span>{{ currentPage }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages"><i class='bx bx-chevron-right'></i></button>
    </div>
</template>

<script>
    export default {
    props: {
        currentPage: Number,
        totalPages: Number
    },
    methods: {
        previousPage() {
        this.$emit('page-change', this.currentPage - 1);
    },
    nextPage() {
        this.$emit('page-change', this.currentPage + 1);
    }
    }
};
</script>

<style scoped>
.pagination {
    display: flex;
    list-style: none;
    padding: 0;
    padding-left: 31px;
    padding-top: 10px;
}

.pagination li {
    margin-right: 10px;
}

.pagination a,
.pagination span {
    display: block;
    padding: 8px 16px;
    border: 1px solid #ddd;
    text-decoration: none;
    color: #333;
    cursor: pointer;
}

.pagination a:hover {
    background-color: #f1f1f1;
}

.pagination.i{
    height: 20px;
    width: 20px;
}

</style>
