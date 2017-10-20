<style>
    .mb-1em {
        margin-bottom: 1em;       
    }
</style>

<template>
<div class="container">
    <div class="row">
        <div class="col-md-4 offset-md-3 mb-1">
            <input class="Search__Input form-control" v-model="url" placeholder="Enter RSS URL">
        </div>
        <div class="col-md-2">
            <button @click.prevent="search" class="Search__Button btn btn-light w-100">Search</button>
        </div>
    </div>

    <template v-if="items.length > 0">
        <hr>

        <div class="row mb-1em" v-for="item in items">

            <div class="col-md-3 text-center">
                <img src="http://placehold.it/150x150" class="img-fluid img-thumbnail">
            </div>
            <div class="col-md-9">
                <a target="_blank" rel="noopener noreferrer" :href="item.link">
                    <h2>{{ item.title }}</h2>
                </a>
                <p v-html="item.description"></p>
            </div>

        </div>
    </template>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'RSSFeed',

    data () {
        return {
            url: '',
            items: [],
        }
    },

    methods: {
        search() {
            this.items = [];
            this.disableSearch();

            axios.get("http://localhost:3000/rssfeed?rss_url=" + this.url).then(response => {
                this.items = response.data.data;
                this.enableSearch();
            }).catch(error => {
                alert(error.response.data.message);
                this.enableSearch();
            });
        },

        disableSearch() {
            const SearchInput = document.querySelector(".Search__Input");
            const SearchButton = document.querySelector(".Search__Button");
            SearchInput.classList.add("disabled");
            SearchInput.disabled = true;
            SearchButton.classList.add("disabled");
            SearchButton.disabled = true;
        },

        enableSearch() {
            const SearchInput = document.querySelector(".Search__Input");
            const SearchButton = document.querySelector(".Search__Button");
            SearchInput.classList.remove("disabled");
            SearchInput.disabled = false;
            SearchButton.classList.remove("disabled");
            SearchButton.disabled = false;
        }
    }
}
</script>