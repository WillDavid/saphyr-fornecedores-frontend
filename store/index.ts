interface State {
	toggleListStatus: boolean,
}

export const state = (): State => ({
	toggleListStatus: true,
});

export const mutations = {

	setToggleListStatus(state: State, payload?: any) {
		state.toggleListStatus = !state.toggleListStatus
	}

}