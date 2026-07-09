import Camp from "../Schema/Camp.js";

export const createCamp = async (
  req,
  res
) => {
  try {
    const camp = await camp.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      camp,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllCamps = async (
  req,
  res
) => {
  try {
    const camps = await Camp.find();

    res.status(200).json({
      success: true,
      total: camps.length,
      camps,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCampById = async (
  req,
  res
) => {
  try {
    const camp =
      await Camp.findById(
        req.params.id
      );

    if (!camp) {
      return res.status(404).json({
        success: false,
        message: "Camp Not Found",
      });
    }

    res.status(200).json({
      success: true,
      camp,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCamp = async (
  req,
  res
) => {
  try {
    const camp =
      await camp.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json({
      success: true,
      camp,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCamp = async (
  req,
  res
) => {
  try {
    await Camp.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Camp Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};