<template>
    <div class="container">
        <div
            v-if="selectedValue === null"
            class="typeahead"
        >
            <div class="input-wrapper">
                <input
                    class="input"
                    v-model="input"
                    @input="onInput"
                />
                <span
                    class="reset"
                    @click="reset"
                >x</span>
            </div>
            <div ref="items" v-if="items.length > 0" class="items">
                <div
                    v-for="item in items"
                    :key="item.id"
                    class="item"
                    @click="select(item.id)"
                >
                    {{ item.label }}
                </div>
            </div>
        </div>
        <div
            v-else
            class="result-wrapper"
        >
            <div class="result">
                <span>{{ selectedLabel }}</span>
                <span
                    class="deselect"
                    @click="deselect"
                >x</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // showItems: {
        //     type: Boolean,
        // },
        value: {
            type: [String, Number],
            // required: true,
            default: null,
        },
        data: {
            type: Array,
            required: true,
        },
    },
    computed: {
        selectedLabel() {
            if (!this.selectedValue) {
                return '';
            }
            return this.data.find(e => e.id === this.selectedValue).label;
        },
    },
    data() {
        return {
            selectedValue: this.value,
            input: '',
            // timeout: null,
            // timeoutTimer: 1000,
            items: [],
            // data: [
            //     {
            //         id: 1,
            //         label: 'thing1',
            //     },
            //     {
            //         id: 2,
            //         label: 'something2',
            //     },
            //     {
            //         id: 3,
            //         label: 'thingsome3',
            //     },
            //     {
            //         id: 4,
            //         label: 'some4',
            //     },
            // ],
        };
    },
    mounted() {
        // this.items = this.data;
    },
    methods: {
        select(id) {
            this.selectedValue = id;
            this.$emit('input', this.selectedValue);
            this.reset();
        },
        reset() {
            this.input = '';
            this.items = [];
        },
        deselect() {
            this.selectedValue = null;
            this.$emit('input', this.selectedValue);
        },
        onInput() {
            if (this.data.length > 0) {
                this.doFilter();
            }
            // clearTimeout(this.timeout);
            // this.timeout = null;
            // this.timeout = setTimeout(this.doSearch, this.timeoutTimer);
        },
        doFilter() {
            if (this.input.length === 0) {
                this.items = [];
                return;
            }

            let startsWithRegex = new RegExp('^' + this.input, 'i');
            let startsWithResult = this.data.filter(e => startsWithRegex.test(e.label));

            let containsRegex = new RegExp(this.input, 'i');
            let containsResult = this.data.filter(e => containsRegex.test(e.label) && !startsWithResult.find(f => f.id === e.id));

            let fuzzyRegexString = '^';
            for (let i = 0; i < this.input.length; i++) {
                fuzzyRegexString += '(?=.*' + this.input[i] + ')';
            }
            let fuzzyRegex = new RegExp(fuzzyRegexString, 'i');
            let fuzzyResult = this.data.filter(e => fuzzyRegex.test(e.label) && !startsWithResult.find(f => f.id === e.id) && !containsResult.find(f => f.id === e.id));
            this.items = [...startsWithResult, ...containsResult, ...fuzzyResult];
        },
        // doSearch() {
        //     // console.log(this.input);
        //     this.items = this.data.filter(e => e.label.toLowerCase().indexOf(this.input) !== -1);
        //     // this.items = this.data.filter(e => {
        //     //     console.log(e);
        //     //     e.label.toLowerCase().indexOf(this.input) !== -1;
        //     // });
        //     // this.items = this.data;
        //     // this.items.push('ew');
        // },
    },
}
</script>

<style scoped>
    .container {
        /* position: relative; */
        display: inline-block;
        padding: 10px;
    }
    .typeahead {
        display: inline-block;
        position: relative;
    }
    .input-wrapper {
        display: flex;
        flex-wrap: nowrap;
        /* border: #000 solid 1px; */
        /* width: 20px; */
    }
    .input {
        width: 100%;
        flex-grow: 1;
    }
    .reset {
        cursor: pointer;
    }
    .items {
        position: absolute;
        border: #000 solid 1px;
        width: 100%;
        z-index: 400;
        background: #fff;
    }
    /* .item {

    } */
    .item:hover {
        background-color: #d3d3d3;
        cursor: pointer;
    }
    .result-wrapper {
        display: inline-block;
        border: #ccc solid 1px;
        border-radius: 6px;
        padding: 4px;
        box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    }
    .result {
        display: flex;
        flex-wrap: nowrap;
    }
    .deselect {
        margin-left: 4px;
        padding-left: 2px;
        border-left: solid 1px #ccc;
        cursor: pointer;
    }
</style>
