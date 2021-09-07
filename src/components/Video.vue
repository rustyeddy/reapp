<template>
    <v-container>
        <v-row>
            <v-col>
                <img width="100%" id="vidoe0" src="http://10.11.10.10:1234/video0" />
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-card class="mx-auto" max-width="400" tile>
                    <v-card-title>Cameras</v-card-title>
                    <v-list-item v-for="cam in cameras" :key="cam.id">
                        <v-list-item-title>{{cam.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{cam.url}}</v-list-item-subtitle>
                    </v-list-item>
                </v-card>

            </v-col>

            <v-col>
                <v-card class="mx-auto" max-width="400" tile>
                    <v-card-title>Filters</v-card-title>
                    <v-list-item v-for="filter in filters" :key=filter>
                        <v-list-item-subtitle>{{ filter }}</v-list-item-subtitle>
                    </v-list-item>
                </v-card>

            </v-col>

        </v-row>
    </v-container>
</template>

<script>

 export default {
     name: 'Video',
     props: {
         url: 'http://10.11.10.10:1234/video0',
     },
     computed: {
         cameras() {
             return this.$store.getters.getCameras;             
         },
         activeCamera() {
             return this.$store.getters.selectedCamera;
         },
         filters() {
             return this.$store.getters.getFilters;
         }
     },
     mounted: function() {
         this.$store.dispatch('fetchCameras')
         this.$store.dispatch('fetchFilters')
     }
 }
</script>
