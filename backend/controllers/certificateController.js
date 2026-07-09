import PDFDocument from "pdfkit";
import fs from "fs";

import Donor from "../Schema/Donor.js";
import Certificate from "../Schema/Certificate.js";

export const generateCertificate =
  async (req, res) => {
    try {
      const donor =
        await Donor.findById(
          req.params.id
        );

      if (!donor) {
        return res.status(404).json({
          success: false,
          message:
            "Donor Not Found",
        });
      }

      const fileName =
        `certificate-${Date.now()}.pdf`;

      const path =
        `uploads/certificates/${fileName}`;

      const doc =
        new PDFDocument();

      doc.pipe(
        fs.createWriteStream(path)
      );

      doc.fontSize(30).text(
        "Blood Donation Certificate",
        {
          align: "center",
        }
      );

      doc.moveDown();

      doc.fontSize(18).text(
        `This certificate is proudly awarded to`
      );

      doc.moveDown();

      doc.fontSize(24).text(
        donor.name,
        {
          align: "center",
        }
      );

      doc.moveDown();

      doc.fontSize(18).text(
        "For Voluntary Blood Donation"
      );

      doc.end();

      const certificate =
        await certificate.create({
          donorId: donor._id,
          donorName:
            donor.name,
          bloodGroup:
            donor.bloodGroup,
          donationDate:
            new Date(),
          certificateUrl:
            path,
          issuedBy:
            req.user.id,
        });

      res.status(201).json({
        success: true,
        certificate,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const getCertificates =
  async (req, res) => {
    try {
      const certificates =
        await certificate.find();

      res.status(200).json({
        success: true,
        certificates,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };