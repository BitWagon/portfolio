import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite in dev mode
export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
