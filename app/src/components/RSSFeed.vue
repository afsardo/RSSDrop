<template>

<div class="container">
    <div class="row">
        <div class="col-md-4 offset-md-3 mb-1">
            <input class="Search__Input form-control" style="display: inline-block;" placeholder="Enter RSS URL">
        </div>
        <div class="col-md-2">
            <button @click.prevent="search" class="Search__Button btn btn-light w-100">Search</button>
        </div>
    </div>

    <hr>

    <div class="row">

        <div class="col-md-3 text-center">
            <img src="http://placehold.it/150x150" class="img-fluid img-thumbnail">
        </div>
        <div class="col-md-9">
            <a target="_blank" rel="noopener noreferrer" href="#">
                <h2>An example feed title</h2>
            </a>
            <p>In facilisis feugiat ullamcorper. Maecenas sit amet nunc magna. Sed magna lorem, fringilla quis sapien in, fringilla scelerisque nisl. Nam aliquet aliquet finibus. Morbi eget nibh nec justo cursus accumsan. Vivamus venenatis magna at suscipit sodales. Nam sed elit urna. Sed porta tortor rutrum nisi mollis porttitor. Sed sit amet porta sem, et pharetra sapien. Maecenas suscipit ligula ac sodales aliquet. Aenean ac eros euismod, scelerisque elit sed, viverra velit.</p>
        </div>

    </div>
</div>
  
</template>

<script>
export default {
    name: 'RSSFeed',

    data () {
        return {
            
        }
    },

    methods: {
        search() {
            this.disableSearch();
        },

        disableSearch() {
            const SearchInput = document.querySelector(".Search__Input");
            const SearchButton = document.querySelector(".Search__Button");
            SearchInput.classList.add("disabled");
            SearchInput.disabled = true;
            SearchButton.classList.add("disabled");
            SearchButton.disabled = true;
        }
    }
}
</script>