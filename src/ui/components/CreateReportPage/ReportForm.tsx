import * as Form from '@radix-ui/react-form';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '@/core/store/store';
import { createReport } from '@/api/report';
import { Button } from '@/ui/components/Button/Button';
import { createPollutedArea } from '@/api/polluted-areas';
import { FormStatusPage } from '@/ui/pages/FormStatusPage';

export function ReportForm() {
  const { user, isAuth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  if (!isAuth || !user) {
    return <div>You need to be logged in</div>;
  }
  const uuid = user.uuid;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);

    const levelMap: Record<string, number> = {
      low: 1,
      middle: 2,
      high: 3,
    };

    const selectedLevel = formData.get('level') as string;
    const pollution_level = levelMap[selectedLevel] || 1;

    const reportPayload = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      created_by: uuid,
      status: 'active',
      location: formData.get('location') as string,
      // media: form.media.files
    };

    try {
      // Create report
      const reportRes = await createReport(reportPayload);
      const uuid = reportRes.data.uuid;

      // if uuid - send to /polluted-area
      const pollutedPayload = {
        project_uuid: uuid,
        type_of_pollution: formData.get('type') as string,
        pollution_level: pollution_level,
        description: reportPayload.description,
        location: reportPayload.location,
      };

      const areaRes = await createPollutedArea(pollutedPayload);
      const areaUuid = areaRes.data.uuid;
      navigate(`/location_info/${areaUuid}`);
    } catch (error) {
      console.error('Failed to create report.', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <FormStatusPage />;
  }

  return (
    <Form.Root
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white rounded-2xl p-8 space-y-2"
    >
      <div className="grid gap-1 border border-gray-300 rounded-lg px-4 py-4 ">
        <h1 className="text-l">Report contaminated area</h1>
        <p className="text-gray-500">Share information about contaminated areas</p>
      </div>

      {/* Title */}
      <Form.Field name="title" className="grid gap-1">
        <Form.Control asChild>
          <input
            required
            type="text"
            placeholder="Title"
            className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#4F6A35] placeholder-black"
          />
        </Form.Control>
      </Form.Field>

      {/* Location */}
      <Form.Field name="location" className="grid gap-1 relative">
        <Form.Control asChild>
          <input
            required
            type="text"
            placeholder="Location"
            className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#4F6A35] placeholder-black"
          />
        </Form.Control>
        <img
          src="src/assets/icons/report_form/location.svg"
          alt="Location"
          className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
        />
      </Form.Field>

      {/* Pollution type */}
      <Form.Field name="type" className="grid gap-1 px-4 py-4 border border-gray-300 rounded-lg">
        <Form.Label className="text-l font-medium">Type of pollution</Form.Label>
        <div className="flex flex-col gap-3">
          {['Soil', 'Water', 'Garbage', 'Other'].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <Checkbox.Root className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center data-[state=checked]:bg-[#4F6A35]">
                <Checkbox.Indicator>
                  <CheckIcon className="text-white w-4 h-4" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span className="text-sm text-gray-700">{type}</span>
            </label>
          ))}

          {/* Поле для Other — всегда видно */}
          <Form.Control asChild>
            <input
              type="text"
              className="mt-2 w-full border border-gray-300 rounded-2xl px-4 py-1 focus:outline-none focus:ring-2 focus:ring-[#4F6A35]"
            />
          </Form.Control>
        </div>
      </Form.Field>

      {/* Description */}
      <Form.Field
        name="description"
        className="grid gap-1 px-4 py-4 border border-gray-300 rounded-lg"
      >
        <Form.Label className="text-l font-medium">Description</Form.Label>
        <Form.Control asChild>
          <textarea
            required
            rows={4}
            placeholder="Text"
            className="w-full px-0 py-8 focus:outline-none rounded-lg focus:ring-2 focus:ring-[#4F6A35] resize-none placeholder-gray-500"
          />
        </Form.Control>
      </Form.Field>

      {/* Level of pollution */}
      <Form.Field name="level" className="grid gap-1 px-4 py-4 border border-gray-300 rounded-lg">
        <Form.Label className="text-l font-medium">Level of pollution</Form.Label>
        <div className="flex gap-6">
          {['Low', 'Middle', 'High'].map((level) => (
            <label key={level} className="flex items-center gap-2">
              <input
                type="radio"
                name="level"
                value={level.toLowerCase()}
                className="accent-[#4F6A35] w-4 h-4"
              />
              <span className="text-sm text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </Form.Field>

      {/* Add Media */}
      <Form.Field
        name="media"
        className="flex justify-between px-4 py-4 border border-gray-300 rounded-lg relative"
      >
        <Form.Label className="text-l font-medium">Add media</Form.Label>
        <Form.Control asChild>
          <input id="media-upload" type="file" multiple accept="image/*" className="hidden" />
        </Form.Control>
        <label htmlFor="media-upload" className="cursor-pointer">
          <img
            src="src/assets/icons/report_form/add_media.svg"
            alt="Add Media"
            className="w-5 h-5"
          />
        </label>
      </Form.Field>

      {/* Submit */}
      <Form.Submit asChild>
        <div className="flex justify-end mt-8">
          <Button
            type="submit"
            initialIndex={0}
            states={[
              { label: 'Send' },
              { label: 'Send' },
              { label: 'Send' },
              { label: 'Send', textClass: 'text-link' },
            ]}
            transitionMap={{ 0: 0 }}
            className="w-[159px] h-[40px]"
          />
        </div>
      </Form.Submit>
    </Form.Root>
  );
}
