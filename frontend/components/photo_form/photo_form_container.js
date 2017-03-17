import { connect } from 'react-redux';
import { requestPhotos, requestPhoto, addPhoto, deletePhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = (state) => {
  return ({

  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPhoto: photo => dispatch(addPhoto(photo)),
    deletePhoto: id => dispatch(deletePhoto(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm);
