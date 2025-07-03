import React, {useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { useTheme } from '../../context/ThemeContext'
import { portfolioData } from '../../data/portfolioData'
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  User, 
  FileText,
  Github,
  Linkedin,
  Twitter,
  AlertCircle
} from 'lucide-react'

// Zod validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
})

const Contact = () => {
  const { colors } = useTheme()

  const [isSubmitting, setIsSubmitting] = useState(false)

  // React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onChange' // Validate on change for real-time feedback
  })

  // Watch form values for real-time validation
  const watchedValues = watch()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch(`http://localhost:5000/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result.success) {
        toast.success(result.message || 'Thank you! Your message has been sent successfully.')
        reset() // Clear form on success
      } else {
        toast.error(result.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: portfolioData.contact.phone,
      href: `tel:${portfolioData.contact.phone}`
    },
    {
      icon: Mail,
      label: 'Email',
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: portfolioData.contact.location,
      href: null
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Send Message',
      href: portfolioData.contact.whatsapp
    }
  ]

  const socialLinks = [
    {
      platform: 'GitHub',
      url: portfolioData.socialLinks.find(link => link.platform === 'github')?.url || '#',
      icon: Github
    },
    {
      platform: 'LinkedIn',
      url: portfolioData.socialLinks.find(link => link.platform === 'linkedin')?.url || '#',
      icon: Linkedin
    },
    {
      platform: 'Twitter',
      url: portfolioData.socialLinks.find(link => link.platform === 'twitter')?.url || '#',
      icon: Twitter
    }
  ]

  return (
    <section 
      id="contact"
      className="min-h-screen py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 
              className="text-3xl lg:text-5xl font-thin montserrat-font tracking-wider mb-4"
              style={{ color: colors.text }}
            >
              Contact
            </h2>
            <p 
              className="text-lg md:text-xl lg:text-2xl font-light montserrat-font"
              style={{ color: colors.text }}
            >
              Let's discuss your next project
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 
                  className="text-2xl md:text-3xl font-medium montserrat-font mb-6"
                  style={{ color: colors.text }}
                >
                  Get in Touch
                </h3>
                <p 
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: colors.subtext }}
                >
                  Have a project in mind? Let's work together to bring your ideas to life. 
                  I'm always excited to take on new challenges and create amazing digital experiences.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p 
                        className="text-sm font-medium"
                        style={{ color: colors.subtext }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-lg font-medium hover:opacity-75 transition-opacity"
                          style={{ color: colors.text }}
                          target={item.label === 'WhatsApp' ? '_blank' : '_self'}
                          rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : ''}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p 
                          className="text-lg font-medium"
                          style={{ color: colors.text }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 
                  className="text-lg font-medium mb-4"
                  style={{ color: colors.text }}
                >
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ 
                        backgroundColor: colors.cardBackground, 
                        color: colors.text,
                        border: `1px solid ${colors.border}` 
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.platform}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div >
              <div 
                className="rounded-2xl p-8"
                style={{ backgroundColor: colors.cardBackground }}
              >
                <h3 
                  className="text-2xl font-medium montserrat-font mb-6"
                  style={{ color: colors.text }}
                >
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <div className="relative">
                      <User 
                        className="absolute left-3 top-3 w-5 h-5"
                        style={{ color: colors.subtext }}
                      />
                      <input
                        type="text"
                        placeholder="Your Name"
                        {...register('name')}
                        className={`w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none transition-all ${
                          errors.name ? 'ring-2 ring-red-500' : 'focus:ring-2'
                        }`}
                        style={{ 
                          backgroundColor: colors.inputBackground,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                          '--tw-ring-color': colors.primary
                        }}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <div className="relative">
                      <Mail 
                        className="absolute left-3 top-3 w-5 h-5"
                        style={{ color: colors.subtext }}
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        {...register('email')}
                        className={`w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none transition-all ${
                          errors.email ? 'ring-2 ring-red-500' : 'focus:ring-2'
                        }`}
                        style={{ 
                          backgroundColor: colors.inputBackground,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                          '--tw-ring-color': colors.primary
                        }}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <div className="relative">
                      <FileText 
                        className="absolute left-3 top-3 w-5 h-5"
                        style={{ color: colors.subtext }}
                      />
                      <input
                        type="text"
                        placeholder="Subject"
                        {...register('subject')}
                        className={`w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none transition-all ${
                          errors.subject ? 'ring-2 ring-red-500' : 'focus:ring-2'
                        }`}
                        style={{ 
                          backgroundColor: colors.inputBackground,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                          '--tw-ring-color': colors.primary
                        }}
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.subject.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="relative">
                      <MessageCircle 
                        className="absolute left-3 top-3 w-5 h-5"
                        style={{ color: colors.subtext }}
                      />
                      <textarea
                        placeholder="Your Message (at least 10 characters)"
                        {...register('message')}
                        rows={5}
                        className={`w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none transition-all resize-none ${
                          errors.message ? 'ring-2 ring-red-500' : 'focus:ring-2'
                        }`}
                        style={{ 
                          backgroundColor: colors.inputBackground,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                          '--tw-ring-color': colors.primary
                        }}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
                      isSubmitting || !isValid 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:opacity-90'
                    }`}
                    style={{ 
                      backgroundColor: colors.primary,
                      color: 'white'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
