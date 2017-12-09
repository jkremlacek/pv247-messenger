_onTitleChange = (event) => {
    const value = event.target.value;

    this.setState((previousState) => ({
        editedItem: {
            ...previousState.editedItem,
            messageText: value
        }
    }));
};