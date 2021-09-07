import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cameras: [],
        selectedCamera: {},
        
        filters: [],
        selectedFilter: "",

	status: "",
    },

    getters: {
        getCamera(state) {
            return state.camera            
        },
        getCameras(state) {
            return state.cameras
        },
        selectedCamera(state) {
            return state.selectedCamera
        },
        getFilters(state) {
            return state.filters
        },
        getFilter(state) {
            return state.selectedFilter
        }
    },

    mutations: {
        setCamera(state, cam) {
            state.camera = cam;
        },
        SET_LOADING_STATUS(state, status){
            state.status = status;
        },
        SET_CAMERAS(state, cams) {
            state.cameras = cams;
        },
        SELECT_CAMERA(state, cam) {
            state.selectedCamera = cam;
        },
        SET_FILTERS(state, filters) {
            state.filters = filters;
        },
        SET_FILTER(state, filter) {
            state.selectedFilter = filter;
        },
    },
    actions: {
        fetchCameras(context) {
            context.commit('SET_LOADING_STATUS', 'loading')
            axios.get('http://10.11.10.10:8080/api/cameras').then(response => {
                context.commit('SET_CAMERAS', response.data)
                context.commit('SET_LOADING_STATUS', 'notLoading')
            })
        },
        setCameras(context, payload) {
            context.commit("setCameras", payload.cameras);
        },
        selectCamera(context, cam) {
            context.commit("selectCamera", cam);
        },

        fetchFilters(context) {
            context.commit('SET_LOADING_STATUS', 'loadingFilters')
            axios.get('http://10.11.10.10:8080/api/filters').then(response => {
                context.commit('SET_FILTERS', response.data.filters)
                context.commit('SET_LOADING_STATUS', 'notLoading')
            })
        },
    },
    modules: {
    }
})
