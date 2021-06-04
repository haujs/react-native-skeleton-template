import {ActionSheet, Alert, Block, Button, Text} from '@components/base';
import {useModalController} from '@hooks';
import {closeAlert, showAlert} from '@store/actions-types/modal';
import React from 'react';
import {Modal} from 'react-native';
import {useDispatch} from 'react-redux';

const ExampleModal = () => {
  const dispatch = useDispatch();
  const modalState = useModalController({id: 'Modal_1'});
  const alertState = useModalController({
    id: 'Alert_popup',
  });
  const actionSheetState = useModalController({
    id: 'ActionSheet_Example',
  });

  const _showAlert = () => {
    dispatch(
      showAlert({
        title: 'Example Alert',
        message: 'Message odf ',
        buttons: [
          {text: 'Cancel', onPress: () => dispatch(closeAlert())},
          {
            text: 'Submit',
            onPress: () => {
              dispatch(closeAlert());
              setTimeout(() => {
                dispatch(
                  showAlert({
                    title: 'Example Alert',
                    message: 'Message odf ',
                    buttons: [
                      {text: 'Cancel', onPress: () => dispatch(closeAlert())},
                    ],
                    options: {cancelable: true},
                  }),
                );
              }, 300);
            },
          },
        ],
        options: {cancelable: true},
      }),
    );
  };

  return (
    <Block flex backgroundColor="white" padding={16}>
      <Text>Alert</Text>
      <Button title="Show Alert" onPress={_showAlert} />
      <Block height={24} />
      <Text>Modal Controller</Text>
      <Button title="Show Modal" onPress={modalState.show} />
      <Modal
        visible={modalState.isVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={modalState.close}
        onDismiss={modalState.dismiss}>
        <Block padding={16}>
          <Text fontType="bold" size={16} center>
            Modal Example
          </Text>
          <Block height={24} />
          <Button
            title="Show Alert In Modal"
            onPress={() => {
              alertState.show({message: 'Alert in modal'});
            }}
          />
          <Block height={24} />
          <Button title="Close Modal" onPress={modalState.close} />
          <Alert
            isVisible={alertState.isVisible}
            title="Alert title"
            buttons={[{text: 'Cancel', onPress: alertState.close}]}
            onDismiss={alertState.dismiss}
            {...alertState.customProps}
          />
        </Block>
      </Modal>
      <Block height={24} />
      <Text>Action Sheet</Text>
      <Button title="Show Action Sheet" onPress={actionSheetState.show} />
      <ActionSheet
        isVisible={actionSheetState.isVisible}
        headerTitle="A short description of the actions goes here."
        buttons={[{text: 'Action 1'}, {text: 'Action 2'}, {text: 'Action 3'}]}
        onPressCancel={actionSheetState.close}
        onDismiss={actionSheetState.dismiss}
      />
    </Block>
  );
};

export default ExampleModal;
