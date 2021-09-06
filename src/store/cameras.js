export const cameras = {
    namespaced: true,
    state: {
        status: "notLoading",
        cameras: [],
        selectedCamera: {}
    },
    getters: {
        getCameras(state) {
            return state.cameras;
        },
        selectedCamera(state) {
            return state.selectedCamera;
        },
    },
    mutations: {
        SET_LOADING_STATUS(state, status){
            state.status = status;
        },
        SET_CAMERAS(state, cams) {
            state.cameras = cams;
        },
        SELECT_CAMERA(state, cam) {
            state.selectedCamera = cam;
        },
    },

    actions: {
        fetchCameras(context) {
            context.commit('SET_LOADING_STATUS', 'loading')
            axios.get('/api/cameras').then(response => {
                context.commit('SET_LOADING_STATUS', 'notLoading')
                context.commit('SET_CAMERAS', response.data.cameras)
            })
        },
        setCameras(context, payload) {
            context.commit("setCameras", payload.cameras);
        },
        selectCamera(context, cam) {
            context.commit("selectCamera", cam);
        },
    },
};
