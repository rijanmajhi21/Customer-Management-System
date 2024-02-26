    <template>
        <div>
        <canvas ref="chart"></canvas>
        </div>
    </template>
    
    <script>
    import { Line } from 'vue-chartjs';
    
    export default {
        extends: Line,
        props: ['chartData', 'options'],
        mounted() {
        this.renderChart(this.chartData, this.options);
        },
    };
    </script>