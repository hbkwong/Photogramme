import { connect } from 'react-redux';
import { requestPhotos, requestPhoto, addPhoto, deletePhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm);
