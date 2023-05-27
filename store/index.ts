interface NewPassword {
	description: string;
	email: string;
	password: string;
}

interface State {
    listOfPassword: NewPassword[];
  }

  export const state = (): State => ({
    listOfPassword: [],
  });

export const mutations = {

    setNewPassword(state: State, payload: NewPassword) {
        console.log(payload);
        state.listOfPassword.push(payload)
    },
}