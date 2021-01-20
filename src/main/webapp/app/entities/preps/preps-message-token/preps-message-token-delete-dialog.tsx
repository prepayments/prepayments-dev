import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IPrepsMessageToken } from 'app/shared/model/preps/preps-message-token.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './preps-message-token.reducer';

export interface IPrepsMessageTokenDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PrepsMessageTokenDeleteDialog = (props: IPrepsMessageTokenDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/preps-message-token' + props.location.search);
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.prepsMessageTokenEntity.id);
  };

  const { prepsMessageTokenEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose}>Confirm delete operation</ModalHeader>
      <ModalBody id="prepaymentsDevApp.prepsPrepsMessageToken.delete.question">
        Are you sure you want to delete this PrepsMessageToken?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp; Cancel
        </Button>
        <Button id="gha-confirm-delete-prepsMessageToken" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp; Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ prepsMessageToken }: IRootState) => ({
  prepsMessageTokenEntity: prepsMessageToken.entity,
  updateSuccess: prepsMessageToken.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PrepsMessageTokenDeleteDialog);
