<template>
    <v-container>
        <v-row>
            <v-col>
                <img width="100%" id="vidoe0" src="http://10.11.10.10:1234/video0" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h3>Cameras</h3>
            </v-col>

            <v-col>
                <h3>Active Camera</h3>                
            </v-col>

            <v-col>
                <h3>Filters</h3>                                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
 export default {
     name: 'HelloWorld',
     props: {
         url: 'http://10.11.10.10:1234/video0',
     },
 }
</script>
